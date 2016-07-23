from __future__ import unicode_literals

from django.db import models


class Centre(models.Model):
    name = models.CharField(max_length=100)
    note = models.CharField(max_length=100)

    class Meta:
        app_label = 'app'
