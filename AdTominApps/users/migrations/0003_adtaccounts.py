# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0002_auto_20200329_0242'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdtAccounts',
            fields=[
                ('vAccountId', models.AutoField(primary_key=True, serialize=False, db_column='vExpenseId')),
                ('vAccountDescription', models.CharField(verbose_name='Nombre Cuenta', max_length=100)),
                ('User', models.ForeignKey(verbose_name='Usuario', blank=True, null=True, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
