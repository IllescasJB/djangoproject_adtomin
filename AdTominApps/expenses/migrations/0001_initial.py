# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdtUsers',
            fields=[
                ('vExpenseId', models.AutoField(primary_key=True, serialize=False, db_column='vUserId')),
                ('vExpenseDescription', models.CharField(verbose_name='FirstName', max_length=100)),
                ('vExpenseBalance', models.CharField(verbose_name='LastName', max_length=100)),
            ],
        ),
    ]
