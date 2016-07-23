from django.shortcuts import render
from django.http import HttpResponse
from models import Student,Workshop,RelationMentor
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
	for workshop in details:
		workshops.append(workshop.name)
	data = {'id':2, 'count':len(workshops), 'names':workshops}
	
	return HttpResponse(json.dumps(data))


def get_status_by_no(request):
	if request.method == 'POST':
		number = int(request.POST['phone'])
		status = Student.objects.get(id = number).current_status
	return HttpResponse(status)


def get_relation(request):
    rm = RelationMentor.objects.all()
    return HttpResponse(json.dumps({'result' : [r for r in rm]}))


def svm(request):
    import numpy as np
    from sklearn.svm import SVC
    X = np.array([[-1, -1], [-2, -1], [1, 1], [2, 1]])
    y = np.array([0, 0, 1, 1])
    clf = SVC()
    clf.fit(X, y)
    return HttpResponse(clf.predict([[-0.8, -1]]))