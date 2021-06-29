import datetime
from django.utils.timezone import get_current_timezone
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.http import HttpRequest, HttpResponse
from django.urls import path
from django.views.generic import View
from django.shortcuts import render, redirect

# from .context_processors import everyWhere
from .models import user, ticket, train_info, transection, route, passenger
# from django.db import connection, connections
from django.db.models import Q
# import cx_Oracle

global selected_route_id


# Create your views here.
# from train.forms import SignUpForm

# from django.utils.crypto import get_random_string
#     ticket_no = get_random_string(length=8,allowed_chars=string.ascii_uppercase + string.digits + string.ascii_lowercase)
#     setattr(ticket,ticket_id,ticket_no)

def signUp(request):
    if request.POST.get('signUpSubmit') == 'SIGN_UP':
        a = request.POST.get('passSign')
        b = request.POST.get('conf_passSign')
        if a == b:
            signin = user()
            signin.user_email = request.POST.get('emailSign')
            signin.user_password = request.POST.get('conf_passSign')
            signin.user_status = request.POST.get('userStatusSign')
            signin.user_signin_date = str(datetime.datetime.now(tz=get_current_timezone()))
            signin.save()
            messages.success(request=request, message='Successfully Signed Up!! Now Log in please.')
        else:
            messages.warning(request=request, message="Password did not matched")

def loggin(request):
    if request.POST.get('LogInSubmit') == 'Log_In':
        emaillog = request.POST.get('emailLogin')
        passlog = request.POST.get('passLogin')
        statusLog = request.POST.get('userStatusLog')
        if user.objects.filter(user_email__exact=emaillog).exists():
            x = user.objects.filter(user_email=emaillog).filter(user_password=passlog).filter(user_status=statusLog)
            if x:
                if x.filter(user_status='Admin'):
                    # context_processors.everyWhere['adminPlace'] = ''
                    messages.success(request=request, message=f'WelCome Back {statusLog} !!')
                    print(f'WelCome Back {statusLog} !!')
                else:
                    messages.success(request=request, message=f'Logged In as {statusLog} SuccessFul !!')
                    print(f'Logged In as {statusLog} SuccessFul !!')
                return True
            else:
                messages.error(request=request, message='Invalid LogIn attempt!!!')
        else:
            messages.error(request=request, message=f'{emaillog} not found, try again.')

def index(request):
    signUp(request=request)
    loggin(request=request)
    # if train_info.objects.filter(train_route__r_arrival_station=arr_st) :
    #     print("found it")
    r_data = route.objects.order_by('r_departure_station', 'r_arrival_station').distinct()
    ticket_data = ticket.objects.order_by('ticket_class').distinct()
    context = {
        'r_objects': r_data,
        # 'r_objects2': r_data2,
        't_objects': ticket_data,
    }
    return render(request, 'index.html', context=context)


def schedule(request):
    signUp(request=request)
    loggin(request=request)
    context = {}
    if request.POST.get('search_train1') == 'get_train1':
        dep_st = request.POST.get('fromStation')
        arr_st = request.POST.get('returnStation')
        dept_date = request.POST.get('from_date')
        arr_date = request.POST.get('return_date')
        try:
            selected_route_information = route.objects.get(r_arrival_station__icontains=arr_st,
                                                           r_departure_station__icontains=dep_st,
                                                           r_arrival_date=arr_date, r_departure_date=dept_date)
            selected_route_data = route.objects.get(r_arrival_station__icontains=arr_st,
                                                    r_departure_station__icontains=dep_st, r_arrival_date=arr_date,
                                                    r_departure_date=dept_date).train_infos.all()
            selected_route_id = selected_route_information.r_id
            # print(selected_route_id)
            timeTable = train_info.objects.filter(train_route__r_id=selected_route_id)
            # print(timeTable)
        except:
            selected_route_data = False
        finally:
            context = {
                'searched_data': selected_route_data,
                # 'time_Table' : timeTable,
            }
    return render(request, 'train_search.html', context=context)


def footer_schedule(request):
    if request.POST.get('train_query') == 'search':
        ticketClass = request.POST.get('ticket_class')
        trainName = request.POST.get('ticket_nameF')
        travelFrom = request.POST.get('travelFrom')
        travelDest = request.POST.get('travelDest')
        travelTime = request.POST.get('travelTime')
        # print(trainName, travelFrom, travelDest, ticketClass, travelTime)

    schedule(request=request)


def passenger_Insert(request):
    fname = request.POST.get('firstname')
    # lname = request.POST.get('lastname')
    # pName = str(fname) + ' ' + str(lname)
    phone = request.POST.get('phone')
    pmail = request.POST.get('passenger_email')
    pAge = request.POST.get('Age')
    pgender = str(request.POST.get('gender'))

    x = user.objects.filter(user_email__exact=pmail, user_status='Passenger')
    if x:
        messages.success(request, "passenger's mail account matched with our data")
        try:
            uId = user.objects.get(user_email=pmail)
            p1 = passenger(p_name=fname, p_gender=pgender, p_phone=phone, p_age=pAge, p_transaction_id=uId)
            p1.save()
            return p1
        except:
            messages.warning(request, "A passenger with that mail already exists")
        return 0
    else:
        messages.error(request, "mail not matched,have to put verified mail account again")
    return 0


def booking(request):
    train_id_selected = False
    pasId = None

    signUp(request=request)
    loggin(request=request)
    if request.POST.get('purchaseBtn', False):
        train_id_selected = request.POST.get('ticket_id_selected')
    if request.POST.get('passenger_Created', False):
        pasId = passenger_Insert(request)
    if pasId != None:
        if request.method == 'POST':
            payment = request.POST.get('NogodFinished')
            pinNum = request.POST.get('transactionPin')
            accname = request.POST.get('nogodAccountName')
            accNum = request.POST.get('AccountNumber')
            if payment:
                try:
                    transactionDone = transection(payment_gateway='Nogod', transaction_id=pasId, transaction_pin=pinNum,
                                                  account_holder_name=accname, account_no=accNum, bill_cleared=True)
                    transactionDone.save()
                except:
                    messages.error(request, "Have to create a new passenger!!")
    else:
        messages.warning(request,'To complete transactions, you have to be passenger')
    return render(request, 'Booking.html')


def contact(request):
    signUp(request=request)
    loggin(request=request)
    context = {

    }
    return render(request, 'Contact.html', context=context)


def comingsoon(request):
    signUp(request=request)
    loggin(request=request)
    context = {

    }
    return render(request, 'Coming_soon.html', context=context)


def about(request):
    signUp(request=request)
    loggin(request=request)
    context = {

    }
    return render(request, 'About.html', context=context)


def error404(request, anything):
    if request.method == 'POST':
        srch = request.POST['404search']
        if srch:
            messages.error(request, 'No matched Data,Go to Home')
    return render(request, '404_Error.html')
