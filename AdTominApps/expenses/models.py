from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from AdTominApps.users.models import AdtUsers
from django.contrib.auth.models import User
import datetime

# Create your models here.

@python_2_unicode_compatible
class AdtExpenses(models.Model):
	vExpenseId           = models.AutoField(db_column='vExpenseId',primary_key= True)
	vExpenseDescription  = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Descripción")
	vExpenseBalance      = models.FloatField(blank=False, null=False, verbose_name="Balance")
	vExpenseColor		 = models.CharField(max_length=100 ,blank=True, null=True, verbose_name="Color")
	vExpenseIcon     	 = models.CharField(max_length=100 ,blank=True, null=True, verbose_name="Icono")
	User				 = models.ForeignKey(User, null= True, blank= True, on_delete=models.CASCADE, verbose_name="Usuario")


