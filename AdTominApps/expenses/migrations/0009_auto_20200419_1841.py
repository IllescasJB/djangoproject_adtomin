# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0008_auto_20200410_0330'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adtexpenses',
            name='vExpenseBalance',
            field=models.CharField(verbose_name='Balance', max_length=100),
        ),
    ]
