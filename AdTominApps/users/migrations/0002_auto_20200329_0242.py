# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adtusers',
            name='vFirstName',
            field=models.CharField(verbose_name='Nombre', max_length=100),
        ),
        migrations.AlterField(
            model_name='adtusers',
            name='vLastName',
            field=models.CharField(verbose_name='Apellidos', max_length=100),
        ),
    ]
