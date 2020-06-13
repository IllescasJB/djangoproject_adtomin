# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_adtaccounts'),
    ]

    operations = [
        migrations.AddField(
            model_name='adtaccounts',
            name='vAccountBalance',
            field=models.FloatField(verbose_name='Balance', default=None),
        ),
    ]
