from django.db import models

import cx_Oracle
from django.db import connection
from django.core.validators import RegexValidator

from phone_field import PhoneField

# Create your models here.

class user(models.Model):
    user_id = models.AutoField(primary_key=True,help_text='AutoField is used')
    user_name = models.CharField(max_length=32)
    user_age = models.IntegerField()
    user_email = models.EmailField(max_length=50,help_text='EmailField is used')
    user_phone = PhoneField(blank=True, help_text='Contact phone number')
    user_otp = models.SlugField(max_length=200,unique=True,blank=True,help_text='SlugField is used')
    user_sign_in_time = models.DateTimeField()
    user_status = models.CharField(max_length=32,unique=True)

    # def __str__(self):
    #     return self.user_name

