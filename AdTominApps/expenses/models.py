from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from AdTominApps.users.models import AdtUsers
import datetime

# Create your models here.

@python_2_unicode_compatible
class AdtExpenses(models.Model):
	vExpenseId           = models.AutoField(db_column='vExpenseId',primary_key= True)
	vExpenseDescription  = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Descripcion")
	vExpenseBalance      = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Balance")
	vUsers				 = models.ForeignKey(AdtUsers, null= True, blank= True, on_delete=models.CASCADE)


