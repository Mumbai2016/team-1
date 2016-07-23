from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models


class Centre(models.Model):
    name = models.CharField(max_length=100)
    note = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        app_label = 'app'


class Student(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
    fname = models.CharField(max_length=128)
    lname = models.CharField(max_length=128)
    gender = models.CharField(max_length=128)
    dob = models.DateTimeField()
    branch = models.CharField(max_length=128)
    last_track_date = models.DateTimeField()
    date_joined = models.DateTimeField()
    current_status = models.CharField(max_length=300)

    def __str__(self):
        return self.fname

    class Meta:
        app_label = 'app'
