from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(user)
admin.site.register(passenger)
admin.site.register(ticket)
admin.site.register(transection)
