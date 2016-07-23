from django.shortcuts import render
from django.http import HttpResponse
from models import Student,Workshop
import datetime
import json
# Create your views here.
def current_status(request):
	if request.method == 'GET':
		student_id = int(request.GET['student_id'])
		status = Student.objects.get(id = student_id).current_status
	data = {'id':1, 'status':status}

	return HttpResponse(json.dumps(data))

def update_status(request):
	i = request.GET['id']
	student_id = int(request.GET['student_id'])
	a = ['Less than 3 months', 'Inactive', 'Secondary/School', 'Senior Secondary/PUC', 'Diploma', 'Graduation/Degree', 'Employed', 'Vocation training', 'Student and Employed', 'Drop out', 'Married', 'Not reachable']
	b = Student.objects.get(id = student_id)
	b.current_status = a[i]
	b.save()


def workshop(request):
	today = datetime.datetime.now()
	month = today.month
	year = today.year
	workshops=[]
	details = Workshop.objects.filter(date__year=year, date__month=month)
	name = Workshop.objects.name
	for workshop in details:
		workshops.append(workshop)
	data = {'id':2, 'count':len(workshops), 'Name':name}
	
	return HttpResponse(json.dumps(data))


def get_status_by_no(request):
	if request.method == 'POST':
		number = int(request.POST['phone'])
		status = Student.objects.get(id = number).current_status

	return HttpResponse(status)
	
