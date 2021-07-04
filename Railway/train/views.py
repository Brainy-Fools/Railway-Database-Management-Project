from django.utils.timezone import get_current_timezone
from django.contrib import messages
from django.shortcuts import render
from .models import user, ticket, train_info, transection, route, passenger
from django.utils.crypto import get_random_string
import datetime
import random
import string
import qrcode


def signUp(request):
    if request.POST.get('signUpSubmit') == 'SIGN_UP':
        a = request.POST.get('passSign')
        b = request.POST.get('conf_passSign')
        if a == b:
            user_email = request.POST.get('emailSign')
            user_password = request.POST.get('conf_passSign')
            user_status = request.POST.get('userStatusSign')
            user_exists = user.objects.filter(user_email__exact=user_email,
                                              user_password__exact=user_password,
                                              user_status=user_status)
            if user_exists:
                messages.error(request, message="User already exists . Try another one")
            else:
                signin = user()
                signin.user_email = user_email
                signin.user_password = user_password
                signin.user_status = user_status
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
                    messages.success(request=request, message=f'WelCome Back {statusLog} !!')
                else:
                    messages.success(request=request, message=f'Logged In as {statusLog} SuccessFul !!')
                return True
            else:
                messages.error(request=request, message='Invalid LogIn attempt!!!')
        else:
            messages.error(request=request, message=f'{emaillog} not found, try again.')


def index(request):
    signUp(request=request)
    loggin(request=request)
    r_data = route.objects.order_by('r_departure_station', 'r_arrival_station').distinct()
    ticket_data = ticket.objects.order_by('ticket_class').distinct()
    context = {
        'r_objects': r_data,
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
        ticketCLass = request.POST.get('seatQuality')
        try:
            selected_route_information = route.objects.get(r_arrival_station__icontains=arr_st,
                                                           r_departure_station__icontains=dep_st,
                                                           r_arrival_date=arr_date,
                                                           r_departure_date=dept_date)

            selected_route_data = route.objects.get(r_arrival_station__icontains=arr_st,
                                                    r_departure_station__icontains=dep_st,
                                                    r_arrival_date=arr_date,
                                                    r_departure_date=dept_date).train_infos.all()
            selected_route_id = selected_route_information.r_id
            request.session['TrAinRoUteId'] = selected_route_id
            request.session['SeatClass'] = ticketCLass
        except:
            selected_route_data = False
        finally:
            context = {
                'searched_data': selected_route_data,
            }
    return render(request, 'train_search.html', context=context)


def footer_schedule(request):
    if request.POST.get('train_query') == 'search':
        ticketClass = request.POST.get('ticket_class')
        trainName = request.POST.get('ticket_nameF')
        travelFrom = request.POST.get('travelFrom')
        travelDest = request.POST.get('travelDest')
        travelTime = request.POST.get('travelTime')
    schedule(request=request)


def passenger_Insert(request):
    fname = request.POST.get('firstname')
    phone = request.POST.get('phone')
    pmail = request.POST.get('passenger_email')
    pAge = request.POST.get('Age')
    pgender = str(request.POST.get('gender'))
    x = user.objects.filter(user_email__exact=pmail, user_status='Passenger')
    if x:
        try:
            uId = user.objects.get(user_email=pmail)
            p1 = passenger(p_name=fname, p_gender=pgender, p_phone=phone, p_age=pAge, p_transaction_id=uId)
            p1.save()
            request.session["paSSengerId"] = p1.p_id
            messages.success(request, f"{pmail}--your--ticket--has been--generated.--now--complete--the--transaction")
            return p1
        except:
            messages.warning(request, "invalid  attempt  found!!")
        return 0
    else:
        messages.error(request, "mail not matched,have to put verified mail account again")
    return 0


def booking(request):
    pasId = 0
    signUp(request=request)
    loggin(request=request)
    context = {}
    if request.POST.get('purchaseBtn', False):
        train_id_selected = request.POST.get('ticket_id_selected')
        request.session["trAinId"] = train_id_selected
    if request.POST.get('passenger_Created', False):
        pasId = passenger_Insert(request)
    if pasId != 0:
        traiNID = request.session.get('trAinId', default='')
        routeNID = request.session.get('TrAinRoUteId', default='')
        passeNID = request.session.get('paSSengerId', default='')
        ticKetClAss = request.session.get('SeatClass')
        if ticKetClAss == None:
            ticKetClAss = 'shovon'
        try:
            z = route.objects.get(train_infos__train_id=traiNID)
            endTime = z.r_arrival_time
            startTime = z.r_departure_time
            timeHour = abs(endTime.hour - startTime.hour)
            timeMin = abs(endTime.minute - startTime.minute)
            timeDiff = (f"{timeHour} Hours, {timeMin} Minutes")
            w = train_info.objects.get(train_id=traiNID)
            trainService = w.train_service
            trainNaMe = w.train_name
            baseFare = round(55 * timeHour + 2 * timeMin)
            vatFare = round(0.25 * baseFare)
            totalFare = baseFare + vatFare
            context.update({'departureTime': z.r_departure_time,
                            'arrivalTime': z.r_arrival_time,
                            'duration': timeDiff,
                            'arrivalStation': z.r_arrival_station,
                            'departureStation': z.r_departure_station,
                            'departureDate': z.r_departure_date,
                            'arrivalDate': z.r_arrival_date,
                            'betweenStations': z.r_stoppages,
                            'ticketClasS': ticKetClAss,
                            'trainService': trainService,
                            'trainName': trainNaMe,
                            'baseFare': baseFare,
                            'vatFare': vatFare,
                            'totalFare': totalFare,
                            })
            ticket_no = get_random_string(length=8,
                                          allowed_chars=string.ascii_uppercase + string.digits + string.ascii_lowercase)
            train_tId = train_info.objects.get(train_id=traiNID)
            passen_tId = passenger.objects.get(p_id=passeNID)
            seatNum = 'AC-' + f'{random.randrange(1, 10 ** 3):03}'
            generateTicket = ticket(ticket_id=ticket_no,
                                    ticket_train=train_tId,
                                    ticket_of_passenger=passen_tId,
                                    ticket_source=z.r_departure_station,
                                    ticket_dest=z.r_arrival_station,
                                    ticket_class=ticKetClAss,
                                    ticket_seat_no=seatNum,
                                    ticket_fare=totalFare,
                                    ticket_issue_date=datetime.datetime.now())
            generateTicket.save()
            request.session['TicketID'] = generateTicket.ticket_id
        except:
            messages.error(request, message="Have to follow order")

    if request.POST.get('mobileBanking'):
        mobilePinNum = request.POST.get('mbTransactionPin')
        mobileAccName = request.POST.get('mbAccountName')
        mobileAccNumber = request.POST.get('mbAccountNumber')
        mbPaymentCleared = request.POST.get('mbPaymentCheck')
        if mbPaymentCleared == None:
            mbPaymentCleared = False
        try:
            ttID = request.session.get('TicketID', default='')  # transactionTicketId
            ticketObj = ticket.objects.get(ticket_id=ttID)
            transactionDone = transection(payment_gateway='Mobile Banking',
                                          transaction_id=ticketObj,
                                          account_no=mobileAccNumber,
                                          account_holder_name=mobileAccName,
                                          transaction_pin=mobilePinNum,
                                          bill_cleared=mbPaymentCleared,
                                          cvv=000,
                                          expiry_date=datetime.datetime.today())
            transactionDone.save()
            tranxInfo = transection.objects.get(transaction_id=ticketObj)
            if tranxInfo:
                travellerTranx = tranxInfo.transaction_pin
                issueDate = ticketObj.ticket_issue_date
                travellerClass = ticketObj.ticket_class
                travellerName = ticketObj.ticket_of_passenger.p_name
                travellerPhone = ticketObj.ticket_of_passenger.p_phone
                travellerGender = ticketObj.ticket_of_passenger.p_gender
                travellerMail = ticketObj.ticket_of_passenger.p_transaction_id.user_email
                travellerSeat = ticketObj.ticket_seat_no
                travellerTrain = ticketObj.ticket_train
                travellerSource = ticketObj.ticket_source
                travellerDest = ticketObj.ticket_dest

                context.update({
                    'travellerTicket': ttID,
                    'travellerName': travellerName,
                    'travellerGender': travellerGender,
                    'travellerPhone': travellerPhone,
                    'ticketIssueDate': issueDate,
                    'travellerSeat': travellerSeat,
                    'travellerClass': travellerClass,
                    'travellerTranx': travellerTranx,
                    'travellerMail': travellerMail,
                    'travellerTrain': travellerTrain,
                    'travellerSource': travellerSource,
                    'travellerDest': travellerDest,
                })

                image = qrCodeGenerate(**context)
                tranxInfo = transection.objects.filter(transaction_id=ticketObj).update(qr_code=image)

                # travellerQrCode = tranxInfo.qr_code
                # context.update({'travellerQrCode': travellerQrCode})
                messages.success(request, message="Payment Complete--check out the confirmation section")
        except:
            messages.error(request, "Transaction didn't complete for mobile banking!!")
    if request.POST.get('cardBanking'):
        cardPaymentChecked = request.POST.get('cardPaymentCheck')
        if cardPaymentChecked == None:
            cardPaymentChecked = False
        cardHolderName = request.POST.get('cardHolderName')
        cardNumber = request.POST.get('cardNumber')
        cardTransactionPin = request.POST.get('cardTransactionPin')
        cardCvv = request.POST.get('cardCvv')
        cardExpiryDate = request.POST.get('cardExpiryDate')
        try:
            ttID = request.session.get('TicketID', default='')  # transactionTicketId
            ticketObj = ticket.objects.get(ticket_id=ttID)
            transactionDone = transection(payment_gateway='Credit/Debit Card',
                                          transaction_id=ticketObj,
                                          account_no=cardNumber,
                                          account_holder_name=cardHolderName,
                                          transaction_pin=cardTransactionPin,
                                          bill_cleared=cardPaymentChecked,
                                          cvv=cardCvv,
                                          expiry_date=cardExpiryDate)
            transactionDone.save()
            tranxInfo = transection.objects.get(transaction_id=ticketObj)
            if tranxInfo:
                travellerTranx = tranxInfo.transaction_pin
                issueDate = ticketObj.ticket_issue_date
                travellerClass = ticketObj.ticket_class
                travellerName = ticketObj.ticket_of_passenger.p_name
                travellerPhone = ticketObj.ticket_of_passenger.p_phone
                travellerGender = ticketObj.ticket_of_passenger.p_gender
                travellerMail = ticketObj.ticket_of_passenger.p_transaction_id.user_email
                travellerSeat = ticketObj.ticket_seat_no
                travellerTrain = ticketObj.ticket_train
                travellerSource = ticketObj.ticket_source
                travellerDest = ticketObj.ticket_dest

                context.update({
                    'travellerTicket': ttID,
                    'travellerName': travellerName,
                    'travellerGender': travellerGender,
                    'travellerPhone': travellerPhone,
                    'ticketIssueDate': issueDate,
                    'travellerSeat': travellerSeat,
                    'travellerClass': travellerClass,
                    'travellerTranx': travellerTranx,
                    'travellerMail': travellerMail,
                    'travellerTrain': travellerTrain,
                    'travellerSource': travellerSource,
                    'travellerDest': travellerDest,
                })

                image = qrCodeGenerate(**context)
                transection.objects.filter(transaction_id=ticketObj).update(qr_code=image)

                travellerQrCode = tranxInfo.qr_code
                context.update({'travellerQrCode': image})
                messages.success(request, message="Payment Complete--check out the confirmation section")
        except:
            messages.error(request, "Transaction didn't complete for card medium!!")

    return render(request, 'Booking.html', context=context)


def qrCodeGenerate(**data):
    qr = qrcode.QRCode(
        version=20,
        box_size=15,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        border=5
    )
    travellerName = data['travellerName']
    travellerGender = data['travellerGender']
    travellerPhone = data['travellerPhone']
    travellerMail = data['travellerMail']
    travellerTicket = data['travellerTicket']
    travellerSeat = data['travellerSeat']
    travellerClass = data['travellerClass']
    travellerTranx = data['travellerTranx']
    ticketIssueDate = data['ticketIssueDate']
    travellerTrain = data['travellerTrain']
    travellerSource = data['travellerSource']
    travellerDest = data['travellerDest']

    insideQRcode = f'''
    Train Name      : {travellerTrain}\n 
    Traveler Name   : {travellerName}\n
    Traveler Gender : {travellerGender}\n
    Traveler Phone  : {travellerPhone}\n
    Traveler Mail   : {travellerMail}\n
    Ticket Source   : {travellerSource}\n
    Ticket Destination : {travellerDest}\n
    Ticket Class    : {travellerClass}\n
    Ticket Number   : {travellerTicket}\n
    Ticket Seat no  : {travellerSeat}\n
    Ticket Class    : {travellerClass}\n
    Transaction Pin : {travellerTranx}\n
    Ticket Issued   : {ticketIssueDate.strftime('%Y-%m-%d | %H:%M:%S')}
    '''
    qr.add_data(insideQRcode)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='yellow')
    fileLocation = f'qrcode/{travellerTicket}.png'
    image = img.save(f'static/images/qrcode/{travellerTicket}.png')
    return fileLocation


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
