from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.views.generic import CreateView
from django.core.urlresolvers import reverse_lazy
from django.http import HttpResponse

from django.contrib.auth import logout as do_logout
from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as do_login
from django.contrib.auth.forms import UserCreationForm
from AdTominApps.users.forms import RegistroForm
from AdTominApps.users.models import AdtUsers
from AdTominApps.expenses.models import AdtExpenses

import simplejson
import json

import logging
logger = logging.getLogger(__name__)

def json_response(func):#{{{#
    """
    A decorator thats takes a view response and turns it
    into json. If a callback is added through GET or POST
    the response is JSONP.
    """
    def decorator(request, *args, **kwargs):
        objects = func(request, *args, **kwargs)
        if isinstance(objects, HttpResponse):
            return objects
        try:
            data = simplejson.dumps(objects)
            if 'callback' in request.REQUEST:
                # a jsonp response!
                data = '%s(%s);' % (request.REQUEST['callback'], data)
                return HttpResponse(data, "text/javascript")
        except:
            data = simplejson.dumps(str(objects))
        return HttpResponse(data, "application/json")
            
    return decorator

# Create your views here.

class RegistroUsuario(CreateView):
	model = User
	template_name = "web/register/register.html"
	form_class = RegistroForm
	success_url = '/home'

def register(request):
    # Creamos el formulario de autenticación vacío
    form = RegistroForm()
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = RegistroForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():
            
            # Creamos la nueva cuenta de usuario
            user = form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']

            # Verificamos las credenciales del usuario
            user = authenticate(username=username, password=password)

            # Si el usuario se crea correctamente
            if user is not None:
                # Hacemos el login manualmente
                do_login(request, user)
                expenses = AdtExpenses(vExpenseDescription='Restaurantes',vExpenseBalance=0,vExpenseColor='e83e8c',vExpenseIcon='fas fa-utensils',User=user)
                expenses.save()
                expenses = AdtExpenses(vExpenseDescription='SuperMercado',vExpenseBalance=0,vExpenseColor='1cc88a',vExpenseIcon='fas fa-shopping-cart',User=user)
                expenses.save()
                expenses = AdtExpenses(vExpenseDescription='Salud',vExpenseBalance=0,vExpenseColor='e74a3b',vExpenseIcon='fas fa-heartbeat',User=user)
                expenses.save()
                expenses = AdtExpenses(vExpenseDescription='Transporte',vExpenseBalance=0,vExpenseColor='4e73df',vExpenseIcon='fas fa-bus',User=user)
                expenses.save()
                expenses = AdtExpenses(vExpenseDescription='Vestido',vExpenseBalance=0,vExpenseColor='f6c23e',vExpenseIcon='fas fa-tshirt',User=user)
                expenses.save()
                # Y le redireccionamos a la portada
                return redirect('/home')

    # Si llegamos al final renderizamos el formulario
    return render(request, "web/register/register.html", {'form': form})

@json_response
def addExpense(request):
    resultJSON = {}
    user = User.objects.get(username=request.GET['userName'])
    currentExpense = AdtExpenses(vExpenseDescription=request.GET['description'],vExpenseBalance=request.GET['balance'],vExpenseColor=request.GET['color'],vExpenseIcon=request.GET['icon'],User=user)
    currentExpense.save()

    resultJSON["EXID"]   = str(currentExpense.vExpenseId)
    resultJSON["EXDESC"] = str(currentExpense.vExpenseDescription)
    resultJSON["EXPBAL"] = str(currentExpense.vExpenseBalance)
    resultJSON["EXPCOL"] = str(currentExpense.vExpenseColor)
    resultJSON["EXPICO"] = str(currentExpense.vExpenseIcon)

    resultJSON['Status'] = 'OK'
    return resultJSON    

@json_response
def updateExpense(request):

    resultJSON = {}
    #user = User.objects.get(username=request.GET['userName'])
    try:
        currentExpense = AdtExpenses.objects.get(vExpenseId = request.GET['expenseId'])
        #currentExpense = AdtExpenses.objects.filter(User=user).filter(vExpenseId = request.GET['expenseId'])
        currentExpense.vExpenseDescription = request.GET['description']
        currentExpense.vExpenseColor       = request.GET['color']
        currentExpense.vExpenseIcon        = request.GET['icon']
        currentExpense.save()
        resultJSON["EXID"]   = str(currentExpense.vExpenseId)
        resultJSON["EXDESC"] = str(currentExpense.vExpenseDescription)
        resultJSON["EXPCOL"] = str(currentExpense.vExpenseColor)
        resultJSON["EXPICO"] = str(currentExpense.vExpenseIcon)
        resultJSON['Status'] = 'OK'
        return resultJSON

    except AdtExpenses.DoesNotExist:
        print("no se pudo efectuar la operación")
        resultJSON['Status'] = 'BAD'
        return resultJSON        


@json_response
def deleteExpense(request):
    resultJSON = {}
    try:

        currentExpense = AdtExpenses.objects.get(vExpenseId = request.GET['expenseId'])
        resultJSON['EXID'] = request.GET['expenseId']
        currentExpense.delete()
        resultJSON['Status'] = 'OK'
        return resultJSON
    
    except AdtExpenses.DoesNotExist:

        resultJSON['Status'] = 'BAD'
        return resultJSON 

@json_response
def sendBalance(request):

    resultJSON = {}
    #user = User.objects.get(username=request.GET['userName'])
    try:
        currentExpense = AdtExpenses.objects.get(vExpenseId = request.GET['expenseId'])
        #currentExpense = AdtExpenses.objects.filter(User=user).filter(vExpenseId = request.GET['expenseId'])
        balance = round(float(request.GET['balance']),2)
        currentExpense.vExpenseBalance += balance
        print(currentExpense.vExpenseBalance)
        currentExpense.save()
        resultJSON["EXID"]   = str(currentExpense.vExpenseId)
        resultJSON["EXPBAL"] = str(currentExpense.vExpenseBalance)
        resultJSON['Status'] = 'OK'
        return resultJSON

    except AdtExpenses.DoesNotExist:
        print("no se pudo efectuar la operación")
        resultJSON['Status'] = 'BAD'
        return resultJSON        



@json_response
def listExpenses(request):
    resultJSON = {}
    user = User.objects.get(username=request.GET['userName'])
    expensesCatalog = AdtExpenses.objects.filter(User=user)
    if expensesCatalog:
        expensesCatalogDict = []
        for expense in expensesCatalog:
            currentObject = {}
            currentObject["EXID"] = str(expense.vExpenseId)
            currentObject["EXDESC"] = str(expense.vExpenseDescription)
            currentObject["EXPBAL"] = str(expense.vExpenseBalance)
            currentObject["EXPCOL"] = str(expense.vExpenseColor)
            currentObject["EXPICO"] = str(expense.vExpenseIcon) 
            expensesCatalogDict.append(currentObject)

        resultJSON['expensesCatalogDict'] = expensesCatalogDict
        print(expensesCatalogDict)
        resultJSON['Status'] = 'OK'
        return resultJSON

def welcome(request):
    return render(request,'web/adtHtml/index.html')

"""
def login(request):

	# Creamos el formulario de autenticación vacío
    form = LoginForm()
    logger.info('USUARIO NO ENCONTRADO')
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = LoginForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():
            # Recuperamos las credenciales validadas
            email = form.cleaned_data['vEmail']
            password = form.cleaned_data['vPassAccess']

            # Verificamos las credenciales del usuario
            user = AdtUsers(vEmail=email, vPassAccess=password)

            # Si existe un usuario con ese nombre y contraseña
            if user is not None:
            	logger.info('USUARIO ENCONTRADO')
                # Hacemos el login manualmente
                #do_login(request, user)
                # Y le redireccionamos a la portada
            	return redirect('/welcome')

        logger.info('USUARIO NO ENCONTRADO')

    # Si llegamos al final renderizamos el formulario
    return render(request, "web/login.html", {'form': form})
"""

"""
def welcome(request):
    # Si estamos identificados devolvemos la portada
    if request.user.is_authenticated:
        return render(request, "web/adtHtml/index.html")
    # En otro caso redireccionamos al login
    return redirect('/login')

def login(request):
    # Creamos el formulario de autenticación vacío
    form = AuthenticationForm()
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = AuthenticationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():
            # Recuperamos las credenciales validadas
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            # Verificamos las credenciales del usuario
            user = authenticate(username=username, password=password)

            # Si existe un usuario con ese nombre y contraseña
            if user is not None:
                # Hacemos el login manualmente
                do_login(request, user)
                # Y le redireccionamos a la portada
                return redirect('/welcome')

    # Si llegamos al final renderizamos el formulario
    return render(request, "web/login.html", {'form': form})

def register(request):
    # Creamos el formulario de autenticación vacío
    form = UserCreationForm()
    if request.method == "POST":
        # Añadimos los datos recibidos al formulario
        form = UserCreationForm(data=request.POST)
        # Si el formulario es válido...
        if form.is_valid():

            # Creamos la nueva cuenta de usuario
            user = form.save()

            # Si el usuario se crea correctamente 
            if user is not None:
                # Hacemos el login manualmente
                do_login(request, user)
                # Y le redireccionamos a la portada
                return redirect('/welcome')

    # Si llegamos al final renderizamos el formulario
    return render(request, "web/register/register.html", {'form': form})

def logout(request):
    # Finalizamos la sesión
    do_logout(request)
    # Redireccionamos a la portada
    return redirect('/login')
"""