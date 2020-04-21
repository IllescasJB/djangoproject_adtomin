# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0006_auto_20200409_0109'),
    ]

    operations = [
        migrations.RenameField(
            model_name='adtexpenses',
            old_name='Users',
            new_name='User',
        ),
    ]
