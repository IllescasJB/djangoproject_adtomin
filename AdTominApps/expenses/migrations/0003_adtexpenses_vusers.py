# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20200329_0242'),
        ('expenses', '0002_auto_20200329_0242'),
    ]

    operations = [
        migrations.AddField(
            model_name='adtexpenses',
            name='vUsers',
            field=models.ForeignKey(blank=True, null=True, to='users.AdtUsers'),
        ),
    ]
