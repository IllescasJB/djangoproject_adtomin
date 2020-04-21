# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0009_auto_20200419_1841'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adtexpenses',
            name='vExpenseBalance',
            field=models.FloatField(verbose_name='Balance'),
        ),
    ]
