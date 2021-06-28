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
from django.db import connection, connections
from django.db.models import Q
import cx_Oracle

cursor = connection.cursor()
global valu;
global selected_route_id


# Create your views here.
# from train.forms import SignUpForm

# from django.utils.crypto import get_random_string
#     ticket_no = get_random_string(length=8,allowed_chars=string.ascii_uppercase + string.digits + string.ascii_lowercase)
#     setattr(ticket,ticket_id,ticket_no)

def loggin(request):
    if request.POST.get('LogInSubmit') == 'Log_In':
        emaillog = request.POST.get('emailLogin')
        passlog = request.POST.get('passLogin')
        statusLog = request.POST.get('userStatusLog')
        if user.objects.filter(user_email__exact=emaillog).exists():
            x = user.objects.filter(user_email=emaillog).filter(user_password=passlog).filter(user_status=statusLog)
            if x:
                if x.filter(user_status='Admin'):
                    # print('Cool,nicely done')
                    # context_processors.everyWhere['adminPlace'] = ''
                    messages.success(request=request, message='WelCome Back Admin !!')
                # print("hello", emaillog)
                messages.success(request=request, message='Logged In SuccessFul !!')
                return True
            else:
                messages.error(request=request, message='Invalid LogIn attempt')
        else:
            messages.error(request=request, message='Email not found, try again.')


# for x in user.objects.raw('''select user_id,user_email from train_user'''):
#     if x == emaillog:
#         messages.success(request=request, message='Logged In SuccessFul !!')
#         print("Success. But at what cost? Lots of Debugging,right?")
# pass
# if (login.user_email == emaillog and login.user_password == passlog and login.user_status == statusLog):
#     messages.success(request=request,message='Logged In SuccessFul !!')
#     print("Success. But at what cost? Lots of Debugging,right?")
# else:
#     messages.error(request=request,message='Invalid LogIn attempt')
#     print("Bad luck Bro , Try hard next time...")

# def passenger():
#     passenger = passenger()
#     signin.user_email = request.POST.get('emailSign')
#     signin.user_password = request.POST.get('conf_passSign')
#     signin.user_status = request.POST.get('userStatusSign')
#     signin.user_signin_date = str(datetime.datetime.now(tz=get_current_timezone()))
#     signin.save()
#     messages.success(request=request, message='Successfully Signed Up!! Now Log in please.')


def signUp(request):
    if request.POST.get('signUpSubmit') == 'SIGN_UP':
        # print("Pressed it")
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
            # print("Data inserted")
        else:
            # print("Bad Luck.Guess What!!")
            messages.warning(request=request, message="Password did not matched")


def booking(request):
    train_id_selected = False
    pasId = False

    signUp(request=request)
    loggin(request=request)
    if request.POST.get('purchaseBtn', False):
        train_id_selected = request.POST.get('ticket_id_selected')
        # print(train_id_selected)
    if request.POST.get('passenger_Created', False):
        pasId = passenger_Insert(request)
        # if pasId != 0:
        #     print(pCheck)
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
                # print("Ok")
            except:
                messages.error(request, "Have to create a new passenger!!")

    # # with connection.cursor() as cursor:
    # #     cursor.execute('''select * from train_route''')
    # #     row = cursor.fetchall()
    # #     context = {
    # #         'data' : row #this will give list so i have to make a loop in template to get items from list
    # #     }
    # # context = {'a':'M'}
    return render(request, 'Flights-Booking.html')


def buy1(request):
    signUp(request=request)
    loggin(request=request)
    return render(request, 'Flights-Booking.html')


def passenger_Insert(request):
    fname = request.POST.get('fname')
    lname = request.POST.get('lname')
    pName = str(fname) + ' ' + str(lname)
    phone = request.POST.get('phone')
    pmail = request.POST.get('passenger_email')
    pAge = request.POST.get('Age')
    pgender = request.POST.get('gender')

    x = user.objects.filter(user_email__exact=pmail, user_status='Passenger')
    if x:
        # print("Found passenger")
        messages.success(request, "passenger's mail account matched")
        try:
            uId = user.objects.get(user_email=pmail)
            p1 = passenger(p_name=pName, p_gender=pgender, p_phone=phone, p_age=pAge, p_transaction_id=uId)
            p1.save()
            return p1
        except:
            messages.warning(request, "Already a passenger with that mail is exists")
        return 0
    else:
        messages.error(request, "mail not matched,have to put verify mail account again")
        return 0


def schedule(request):
    signUp(request=request)
    loggin(request=request)
    context = {}
    # if request.POST.get('ticket_item_selected'):
        # print('yes,item selected')

    if request.POST.get('search_train1') == 'get_train1':
        dep_st = request.POST.get('fromStation')
        arr_st = request.POST.get('returnStation')
        dept_date = request.POST.get('from_date')
        arr_date = request.POST.get('return_date')
        # print(dep_st)
        # print(arr_st)
        # print(dept_date)
        # print(arr_date)
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
        # query = '''SELECT
        #          train_info.train_name ,
        #          route.r_id
        #         FROM
        #          train_info, route
        #         WHERE
        #          route.r_arrival_station = %s
        #         AND
        #          route.r_departure_station = %s
        #          , [arr_st,dep_st]'''
        # x = train_info.objects.raw(raw_query=query)
        # print(x)
        # x = train_info.train_route.through.objects.all()
        # x = train_info.objects.filter(train_route__r_arrival_station=arr_st)
        # print(x)
        # train_data = x.get(pk)
        # train_data = train_data.filter(train_route__r_arrival_station=arr_st)
        # check = request.POST.get('selected_ticket_buy') == 'proceed to Buy Selected'
        # if check == True:
        #     buy1(request=request)
        #     exit(0)
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


def index(request):
    signUp(request=request)
    loggin(request=request)
    # if train_info.objects.filter(train_route__r_arrival_station=arr_st) :
    #     print("found it")
    # name_map = {'departure': 'r_departure_station', 'arrival': 'r_arrival_station', 'stoppages': 'r_stoppages', 'dep_time': 'r_departure_time'}
    # query = '''select * from train_route'''
    # for val in route.objects.raw(raw_query=query):
    #     # print(val)
    #     context = {
    #         'dep_st': val.r_departure_station,
    #         'arr_st': val.r_arrival_station,
    #         'in_bet_route': val.r_stoppages,
    #         'dep_time': val.r_departure_time,
    #         'arr_time': val.r_arrival_time,
    #         'route_line': val.r_line_no,
    #     }
    # schedule(request=request)
    # my_Filter = OrderFilter()
    r_data = route.objects.order_by('r_departure_station', 'r_arrival_station').distinct()
    # r_data2 = route.objects.distinct("r_departure_station").all()
    ticket_data = ticket.objects.order_by('ticket_class').distinct()
    context = {
        'r_objects': r_data,
        # 'r_objects2': r_data2,
        't_objects': ticket_data,
    }
    return render(request, 'index.html', context=context)


def about(request):
    signUp(request=request)
    loggin(request=request)
    context = {

    }
    return render(request, 'About.html', context=context)


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


def error404(request, anything):
    if request.method == 'POST':
        srch = request.POST['404search']
        if srch:
            messages.error(request, 'No matched Data,Go to Home')
    return render(request, '404_Error.html')
