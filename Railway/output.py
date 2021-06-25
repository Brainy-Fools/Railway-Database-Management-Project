# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class TrainUser(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_email = models.CharField(max_length=60, blank=True, null=True)
    user_password = models.CharField(max_length=256, blank=True, null=True)
    user_signin_date = models.DateTimeField()
    user_status = models.CharField(max_length=32, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Train_User'


class TrainTransection(models.Model):
    account_no = models.CharField(primary_key=True, max_length=60)
    account_holder_name = models.CharField(max_length=60, blank=True, null=True)
    cvv = models.CharField(max_length=3, blank=True, null=True)
    expiry_date = models.DateField()
    transaction_pin = models.CharField(max_length=32, blank=True, null=True)
    bill_cleared = models.BooleanField()
    qr_code = models.CharField(unique=True, max_length=100, blank=True, null=True)
    transaction_id = models.ForeignKey(TrainUser, models.DO_NOTHING)
    payment_gateway = models.CharField(max_length=32, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Train_Transection'


class TrainTicket(models.Model):
    ticket_id = models.CharField(primary_key=True, max_length=32)
    ticket_source = models.CharField(max_length=32, blank=True, null=True)
    ticket_dest = models.CharField(max_length=32, blank=True, null=True)
    ticket_class = models.CharField(max_length=12, blank=True, null=True)
    ticket_seat_no = models.CharField(max_length=12, blank=True, null=True)
    ticket_fare = models.IntegerField()
    ticket_of_passenger_id = models.IntegerField(unique=True)
    ticket_train = models.OneToOneField('TrainTrainInfo', models.DO_NOTHING)
    transaction_for_ticket = models.OneToOneField(TrainTransection, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Train_Ticket'


class TrainPassenger(models.Model):
    p_name = models.CharField(max_length=60, blank=True, null=True)
    p_age = models.IntegerField()
    p_gender = models.CharField(max_length=32, blank=True, null=True)
    p_phone = models.CharField(max_length=31, blank=True, null=True)
    p_transaction_id = models.OneToOneField(TrainTransection, models.DO_NOTHING)
    p_id = models.AutoField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'Train_Passenger'
# Unable to inspect table 'Train_TrainInfo'
# The error was: ORA-00942: table or view does not exist


class TrainTrainInfoTrainRoute(models.Model):
    id = models.BigAutoField(primary_key=True)
    train_info = models.ForeignKey('TrainTrainInfo', models.DO_NOTHING)
    route_id = models.CharField(max_length=32)

    class Meta:
        managed = False
        db_table = 'train_train_info_train_route'
        unique_together = (('train_info', 'route_id'),)


class TrainRoute(models.Model):
    r_stoppages = models.CharField(max_length=256, blank=True, null=True)
    r_arrival_time = models.DateTimeField()
    r_departure_time = models.DateTimeField()
    r_arrival_station = models.CharField(max_length=32, blank=True, null=True)
    r_departure_station = models.CharField(max_length=32, blank=True, null=True)
    r_line_no = models.IntegerField()
    r_id = models.AutoField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'Train_Route'
