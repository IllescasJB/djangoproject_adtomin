from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.contrib.auth.models import User
import datetime

# Create your models here.

@python_2_unicode_compatible
class AdtUsers(models.Model):
	vUserId     = models.AutoField(db_column='vUserId',primary_key= True)
	vFirstName  = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Nombre")
	vLastName   = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Apellidos")
	vPassAccess = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Password")
	vEmail		= models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Email")

class AdtAccounts(models.Model):
	vAccountId 			= models.AutoField(db_column='vExpenseId',primary_key= True)
	vAccountDescription = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Nombre Cuenta")
	vAccountBalance     = models.FloatField(blank=False, null=False,default=None, verbose_name="Balance")
	User				= models.ForeignKey(User, null= True, blank= True,on_delete=models.CASCADE, verbose_name="Usuario")

