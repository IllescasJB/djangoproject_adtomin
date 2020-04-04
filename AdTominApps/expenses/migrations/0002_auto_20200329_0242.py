# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdtExpenses',
            fields=[
                ('vExpenseId', models.AutoField(primary_key=True, serialize=False, db_column='vExpenseId')),
                ('vExpenseDescription', models.CharField(verbose_name='Descripcion', max_length=100)),
                ('vExpenseBalance', models.CharField(verbose_name='Balance', max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='AdtUsers',
        ),
    ]
