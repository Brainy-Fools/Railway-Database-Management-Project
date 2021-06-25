import datetime
from django.utils.timezone import get_current_timezone
from django.contrib.auth import authenticate, login
from django.http import HttpRequest
from django.urls import path
from django.views.generic import View
from django.shortcuts import render, redirect
from .models import *
from django.db import connection, connections
from train.forms import SignUpForm

cursor = connection.cursor()
# Create your views here.
# from train.forms import SignUpForm

# from django.utils.crypto import get_random_string
#     ticket_no = get_random_string(length=8,allowed_chars=string.ascii_uppercase + string.digits + string.ascii_lowercase)
#     setattr(ticket,ticket_id,ticket_no)

def signUp(request):
    if request.POST.get('signUpSubmit') == 'SIGN_UP':
        # print("Pressed it")
        if request.POST.get('emailSign') != request.POST.get('conf_passSign'):
            return
        signin = user()
        signin.user_email = request.POST.get('emailSign')
        signin.user_password = request.POST.get('conf_passSign')
        signin.user_status = request.POST.get('userStatusSign')
        signin.user_signin_date = str(datetime.datetime.now(tz=get_current_timezone()))
        signin.save()
        print("Data inserted")

def booking(request):
    signUp(request=request)
    # name_map = {'departure': 'r_departure_station', 'arrival': 'r_arrival_station', 'stoppages': 'r_stoppages', 'dep_time': 'r_departure_time'}
    query = '''select * from train_route'''
    for val in route.objects.raw(raw_query=query):
        # print(val)
        context = {
            'dep_st': val.r_departure_station,
            'arr_st': val.r_arrival_station,
            'in_bet_route': val.r_stoppages,
            'dep_time': val.r_departure_time,
            'arr_time': val.r_arrival_time,
            'route_line': val.r_line_no,
        }
    # with connection.cursor() as cursor:
    #     cursor.execute('''select * from train_route''')
    #     row = cursor.fetchall()
    #     context = {
    #         'data' : row #this will give list so i have to make a loop in template to get items from list
    #     }
    return render(request, 'Flights-Booking.html', context=context)


def booking_details(request):
    context = {

    }
    return render(request, 'Flight-Home.html', context=context)


def about(request):
    context = {

    }
    return render(request, 'About.html', context=context)


def contact(request):
    context = {

    }
    return render(request, 'Contact.html', context=context)


def comingsoon(request):
    context = {

    }
    return render(request, 'Coming_soon.html', context=context)

# def signup(request):
#     if request.method == 'POST':
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             raw_password = form.cleaned_data.get('password1')
#             user = authenticate(username=username, password=raw_password)
#             login(request, user)
#             return redirect('booking')
#     else:
#         form = SignUpForm()
#     return render(request, 'Flights-Booking.html', {'form': form})
