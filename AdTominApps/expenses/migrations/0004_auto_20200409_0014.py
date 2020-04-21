# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('expenses', '0003_adtexpenses_vusers'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='adtexpenses',
            name='vUsers',
        ),
        migrations.AddField(
            model_name='adtexpenses',
            name='Users',
            field=models.ForeignKey(verbose_name='Usuario', blank=True, null=True, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='adtexpenses',
            name='vExpenseDescription',
            field=models.CharField(verbose_name='Descripción', max_length=100),
        ),
    ]
