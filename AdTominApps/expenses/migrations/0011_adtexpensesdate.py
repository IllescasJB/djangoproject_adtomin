# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('expenses', '0010_auto_20200419_1936'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdtExpensesDate',
            fields=[
                ('vExpenseId', models.AutoField(primary_key=True, serialize=False, db_column='vExpenseId')),
                ('vExpenseDescription', models.CharField(verbose_name='Descripción', max_length=100)),
                ('vExpenseBalance', models.FloatField(verbose_name='Balance')),
                ('vDate', models.CharField(verbose_name='Date', max_length=100, blank=True, null=True)),
                ('User', models.ForeignKey(verbose_name='Usuario', blank=True, null=True, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
