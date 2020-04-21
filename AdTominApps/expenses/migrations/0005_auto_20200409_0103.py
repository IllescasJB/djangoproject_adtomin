# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0004_auto_20200409_0014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adtexpenses',
            name='vExpenseBalance',
            field=models.IntegerField(verbose_name='Balance', max_length=100),
        ),
    ]
