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
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.fname

    class Meta:
        app_label = 'app'


class Mentor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(max_length=128)
    dob = models.DateTimeField()
    branch = models.CharField(max_length=128)

    def __str__(self):
        return self.user.get_full_name()

class Workshop(models.Model):
    name = models.CharField(max_length=128)
    date = models.DateTimeField()
    program = models.CharField(max_length=128)

    def __str__(self):
        return self.name

    class Meta:
        app_label = 'app'


class Meeting(models.Model):
    mentor = models.ForeignKey(Mentor)
    student = models.ForeignKey(Student)
    time = models.DateTimeField()
    feedback = models.CharField(max_length=128, blank=True)

    def __str__(self):
        return self.feedback

    class Meta:
        app_label = 'app'


class Program(models.Model):
    pname = models.CharField(max_length=128)

    def __str__(self):
        return self.pname

    class Meta:
        app_label = 'app'


class SurveyResponse(models.Model):
    student = models.ForeignKey(Student)
    q1 = models.CharField(max_length=128)
    q2 = models.CharField(max_length=128)
    date = models.DateTimeField()

    def __str__(self):
    	return self.student


    class Meta:
        app_label = 'app'


class RelationMentor(models.Model):
    student = models.ForeignKey(Student)
    mentor = models.ForeignKey(Mentor)

    def __str__(self):
        return str(self.student) + ' <3 ' + str(self.mentor)

    class Meta:
        app_label = 'app'



