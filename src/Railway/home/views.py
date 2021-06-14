from django.http import HttpResponse
from django.shortcuts import render
from datetime import date
# Create your views here.
def home(request):
    todays_date = date.today();
    # return HttpResponse('<h1>Tooth Pain is real pain</h1>')
    return render(request,'base.html')