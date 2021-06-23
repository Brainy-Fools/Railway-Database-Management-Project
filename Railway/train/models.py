from django.db import models
# from rest_framework import serializers
from django.core.validators import RegexValidator
from django.core.validators import validate_email
from phone_field import PhoneField
import string, random


# first admin/manager have to insert route & train info
# then user log inned,payment completed,becomes passenger,got the ticket & get the transaction completed
class user(models.Model):
    A = 'Admin'
    G = 'Guest'
    P = 'Passenger'
    M = 'Manager'
    C = 'Clerk'
    user_id =           models.AutoField(primary_key=True)
    user_email =        models.EmailField(max_length=60, help_text='Put Genuine Email Here')
    user_password =     models.CharField(validators=[RegexValidator(regex='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$',
                                                                message='min length 6 , At least one upper case, At least one lower case & At least one digit',
                                                                code='nomatch')], max_length=256,
                                     help_text='need to implement sha-256')
    user_signin_date =  models.DateTimeField()
    user_status =       models.CharField(choices=[(G,'Guest'),(P,'Passenger'),(M,'Manager'),(C,'Clerk'),(A,'Admin')],default=G,max_length=32,help_text='Choose status')

    class Meta:
        ordering = ['user_id']

    def __str__(self):
        return "%s" %(self.user_email)


class transection(models.Model):
    B = 'Bkash'
    V = 'Visa Card'
    M = 'Master Card'
    N = 'Nogod'
    R = 'Rocket'

    payment_gateway =        models.CharField(choices=[(B,'Bkash'),(N,'Nogod'),(R,'Rocket'),(V,'Visa Card'),(M,'Master Card')],default=N,max_length=32,help_text='Choose your favourable payment gateway')
    transaction_id =         models.ForeignKey(user, on_delete=models.CASCADE)
    account_no =             models.CharField(max_length=60, help_text='type account number or Bkash phone Number',
                                  primary_key=True)
    account_holder_name =    models.CharField(max_length=60, blank=True)
    cvv =                    models.CharField(max_length=3, blank=True)
    expiry_date =            models.DateField(blank=True)
    transaction_pin =        models.CharField(max_length=32, help_text='Bkash transaction or Bank slip number')
    bill_cleared =           models.BooleanField(default=False)
    qr_code =                models.ImageField(unique=True, blank=True)

    class Meta:
        ordering = ['transaction_id']

    def __str__(self):
        return "%s" %(self.transaction_id)

class route(models.Model):
    # r_id =                models.CharField(primary_key=True, max_length=32, help_text='This should be admin generated')
    r_id =                models.AutoField(primary_key=True)
    r_stoppages =         models.CharField(max_length=256,help_text='comma separated stoppages name')
    r_arrival_time =      models.DateTimeField(blank=True)
    r_departure_time =    models.DateTimeField(blank=True)
    r_arrival_station =   models.CharField(max_length=32,help_text='From ticket it should be auto generated')
    r_departure_station = models.CharField(max_length=32,help_text='From ticket it should be auto generated')
    r_line_no =           models.SmallIntegerField(help_text='This is station\'s route line number')

    class Meta:
        ordering = ['r_id']

    def __str__(self):
        return "%d" %(self.r_id)

class train_info(models.Model):
    train_route =         models.ManyToManyField(route)
    train_id =            models.CharField(primary_key=True,max_length=60)
    train_name =          models.CharField(max_length=32,help_text='Give exclusive train name here')
    train_service =       models.CharField(max_length=60)
    train_weekened =      models.CharField(blank=True,max_length=12)
    train_info =          models.TextField(blank=True)

    class Meta:
        ordering = ['train_id']

    def __str__(self):
        return "%s" %(self.train_name)

class ticket(models.Model):
    ticket_id =             models.CharField(primary_key=True,help_text='This should be admin generated',max_length=32)
    transaction_for_ticket= models.OneToOneField(transection, on_delete=models.CASCADE,null=True)
    ticket_train =          models.OneToOneField(train_info,on_delete=models.CASCADE,blank=True) # ticket will be generated from train_info
    ticket_of_passenger =   models.OneToOneField('passenger', on_delete=models.CASCADE, blank=True) # jodi passenger delete hoy tobe ticket diye ki korbe
    ticket_source =         models.CharField(max_length=32, help_text='Departure Station ', blank=True)
    ticket_dest =           models.CharField(max_length=32, help_text='Arrival Station ', blank=True)
    ticket_class =          models.CharField(max_length=12, help_text='Seat Quality')
    ticket_seat_no =        models.CharField(max_length=12)
    ticket_fare =           models.IntegerField()

    class Meta:
        ordering = ['-ticket_id'] # from top to bottom

    def __str__(self):
        return "%s" %(self.ticket_of_passenger.p_name)

class passenger(models.Model):
    M = 'male'
    F = 'Female'
    T = 'Transgender'
    P = 'Prefer not to say'

    p_id =             models.AutoField(primary_key=True)
    p_name =           models.CharField(max_length=60, help_text='passenger name here')
    p_age =            models.IntegerField(help_text='Give original age,no fake ages allowed')
    p_gender =         models.CharField(choices=[(M,'Male'),(F,'Female'),(T,'Transgender'),(P,'Prefer not to say')],default=P,max_length=32, blank=True)
    p_phone =          PhoneField(blank=True, help_text='Contact phone number')
    p_transaction_id = models.OneToOneField(transection, on_delete=models.CASCADE,blank=True) #if transaction deleted no longer will be passenger

    class Meta:
        ordering = ['p_id']

    def __str__(self):
        return f'{self.p_id} : {self.p_name}'
