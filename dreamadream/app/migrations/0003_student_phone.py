# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-23 17:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20160723_1502'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='phone',
            field=models.CharField(default=None, max_length=100),
            preserve_default=False,
        ),
    ]
