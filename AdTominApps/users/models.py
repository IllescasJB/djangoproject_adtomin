from django.db import models
from django.utils.encoding import python_2_unicode_compatible
import datetime

# Create your models here.

@python_2_unicode_compatible
class AdtUsers(models.Model):
	vUserId     = models.AutoField(db_column='vUserId',primary_key= True)
	vFirstName  = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Nombre")
	vLastName   = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Apellidos")
	vPassAccess = models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Password")
	vEmail		= models.CharField(max_length=100 ,blank=False, null=False, verbose_name="Email")

