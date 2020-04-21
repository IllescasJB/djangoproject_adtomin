from django.shortcuts import render
from django.http import HttpResponse
from AdTominApps.expenses.models import AdtExpenses

# Create your views here.

def expenses_list(request):
	expenses = AdtExpenses.object.all()
	contexto = {'expenses':expenses}
	return render(request,'web/adtHtml/index.html',contexto)
	