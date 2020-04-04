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
                ('vUserId', models.AutoField(primary_key=True, serialize=False, db_column='vUserId')),
                ('vFirstName', models.CharField(verbose_name='FirstName', max_length=100)),
                ('vLastName', models.CharField(verbose_name='LastName', max_length=100)),
                ('vPassAccess', models.CharField(verbose_name='Password', max_length=100)),
                ('vEmail', models.CharField(verbose_name='Email', max_length=100)),
            ],
        ),
    ]
