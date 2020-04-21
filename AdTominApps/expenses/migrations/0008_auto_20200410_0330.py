# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0007_auto_20200409_0136'),
    ]

    operations = [
        migrations.AddField(
            model_name='adtexpenses',
            name='vExpenseColor',
            field=models.CharField(verbose_name='Color', max_length=100, blank=True, null=True),
        ),
        migrations.AddField(
            model_name='adtexpenses',
            name='vExpenseIcon',
            field=models.CharField(verbose_name='Icono', max_length=100, blank=True, null=True),
        ),
    ]
