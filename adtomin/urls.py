"""adtomin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth.views import login, logout_then_login, password_reset, password_reset_done, password_reset_confirm, password_reset_complete
from AdTominApps.users import views
from django.contrib.auth.decorators import login_required


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^home',login_required(views.welcome)),
    #url(r'^register',views.RegistroUsuario.as_view(), name="registrar"),
    url(r'^register',views.register, name="registrar"),
    #url(r'^login', views.login,name='login'),
    url(r'^$', login, {'template_name':'web/login.html'}),
    url(r'^accounts/login/', login, {'template_name':'web/login.html'}, name='login'),
    url(r'^logout/', logout_then_login, name='logout'),
    url(r'^reset/password_reset', password_reset, {'template_name':'web/register/forgot-password.html','email_template_name':'web/register/password_reset_email.html'}, name='password_reset'),
    url(r'^reset/password_reset_done', password_reset_done, {'template_name':'web/register/password_reset_done.html'}, name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>.+)/$', password_reset_confirm, {'template_name': 'web/register/password_reset_confirm.html'},name='password_reset_confirm'),
    url(r'^reset/done', password_reset_complete, {'template_name': 'web/register/password_reset_complete.html'},name='password_reset_complete'),
    
    url(r'^GetExpenses/',views.listExpenses, name="getExpenses"),
    url(r'^AddExpense/',login_required(views.addExpense), name="addExpense"),
    url(r'^UpdateExpense/',login_required(views.updateExpense), name="updateExpense"),
    url(r'^DeleteExpense/',login_required(views.deleteExpense), name="deleteExpense"),
    url(r'^SendBalance/',login_required(views.sendBalance), name="sendBalance"),
    #url(r'^login',views.login),
    #url(r'^logout',views.logout),
]
