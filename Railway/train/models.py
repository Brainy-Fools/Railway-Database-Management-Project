from django.db import models
# from rest_framework import serializers
from django.core.validators import RegexValidator
from phone_field import PhoneField


class user(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_email = models.EmailField(max_length=60, help_text='Put Genuine Email Here')
    user_password = models.CharField(validators=[RegexValidator(regex='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$',
                                                                message='min length 6 , At least one upper case, At least one lower case & At least one digit',
                                                                code='nomatch')], max_length=256,
                                     help_text='need to implement sha-256')
    user_signin_date = models.DateTimeField()
    user_status = models.BooleanField(default=False)

    def __str__(self):
        return "%s" %(self.user_name)


class transection(models.Model):
    transaction_id = models.ForeignKey(user, on_delete=models.CASCADE)
    transaction_for_ticket = models.OneToOneField('ticket', on_delete=models.CASCADE)
    account_no = models.CharField(max_length=60, help_text='type account number or Bkash phone Number',
                                  primary_key=True)
    account_holder_name = models.CharField(max_length=60, blank=True)
    cvv = models.CharField(max_length=3, blank=True)
    expiry_date = models.DateField(blank=True)
    transaction_pin = models.CharField(max_length=32, help_text='Bkash transaction or Bank slip number')
    bill_cleared = models.BooleanField(default=False)
    qr_code = models.ImageField(unique=True, blank=True)

    def __str__(self):
        return "%s" %(self.account_no)


class ticket(models.Model):
    ticket_id = models.CharField(primary_key=True, max_length=32, help_text='This should be admin generated')
    ticket_of_passenger = models.OneToOneField('passenger', on_delete=models.CASCADE, blank=True)
    ticket_source = models.CharField(max_length=32, help_text='Departure Station ', blank=True)
    ticket_dest = models.CharField(max_length=32, help_text='Arrival Station ', blank=True)
    ticket_class = models.CharField(max_length=12, help_text='Seat Quality')
    ticket_seat_no = models.CharField(max_length=12)
    ticket_fare = models.IntegerField()

    def __str__(self):
        return "%s" %(self.ticket_of_passenger.p_name)


class passenger(models.Model):
    p_id = models.IntegerField(primary_key=True)
    p_name = models.CharField(max_length=60, help_text='passenger name here')
    p_age = models.IntegerField(help_text='Give original age,no fake ages allowed')
    p_gender = models.CharField(max_length=10, blank=True)
    p_phone = PhoneField(blank=True, help_text='Contact phone number')
    p_transaction_id = models.OneToOneField(transection, on_delete=models.CASCADE)

    def __str__(self):
        return "%s" %(self.p_name)
