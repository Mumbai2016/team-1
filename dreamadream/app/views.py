from django.shortcuts import render
from django.http import HttpResponse
from models import Student
import json
# Create your views here.
def current_status(request):
	if request.method == 'GET':
		student_id = int(request.GET['student_id'])
		status = Student.objects.get(id = student_id).current_status

	return HttpResponse(status)


def workshop(request):
	today = datetime.datetime.now()
	month = today.month
	year = today.year
	details = workshop.objects.filter(date__year=year, date__month=month)
	return details
	
