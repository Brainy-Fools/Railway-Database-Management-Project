from django.contrib import admin

# Register your models here.
from .models import *

# admin.site.register(user)
# admin.site.register(passenger)
# admin.site.register(ticket)
# admin.site.register(transection)
# admin.site.register(route)
# admin.site.register(train_info)

# Instead of above simple register ,
# I'm Registering the Admin classes using the decorator for beautifying the admin panel

@admin.register(user)
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'user_email', 'user_signin_date', 'user_status')
    list_filter = ['user_status']
    pass

@admin.register(passenger)
class PassengerAdmin(admin.ModelAdmin):
    list_display = ('p_name', 'p_age', 'p_gender', 'p_phone','p_transaction_id')
    list_filter = [('p_gender')]
    pass

@admin.register(transection)
class TransectionAdmin(admin.ModelAdmin):
    list_display = ('transaction_id','payment_gateway','account_no','account_holder_name', 'transaction_pin', 'bill_cleared')
    list_filter = ['bill_cleared','payment_gateway']
    pass

@admin.register(ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('ticket_of_passenger','ticket_train','ticket_source', 'ticket_dest', 'ticket_class','ticket_seat_no','ticket_fare')
    list_filter = ['ticket_source','ticket_dest']
    fields = ['ticket_id',('transaction_for_ticket','ticket_of_passenger'),'ticket_train',('ticket_source', 'ticket_dest'),('ticket_class','ticket_seat_no','ticket_fare')]
    pass

@admin.register(route)
class RoutesAdmin(admin.ModelAdmin):
    list_display = ('r_id','r_departure_station','r_departure_date','r_departure_time','r_stoppages', 'r_arrival_station', 'r_arrival_date','r_arrival_time',)
    list_filter = ['r_departure_station', 'r_arrival_station']
    fields = ['r_line_no','r_stoppages', ('r_departure_station', 'r_arrival_station'),('r_departure_date','r_arrival_date'),('r_departure_time','r_arrival_time'),]
    pass

@admin.register(train_info)
class TrainInfoAdmin(admin.ModelAdmin):
    list_display = ('train_id', 'train_name', 'train_weekened','train_service','train_info')
    list_filter = ['train_name','train_route']
    fieldsets = (
        (None, {
            'fields': ('train_id', 'train_route', 'train_name','train_service','train_weekened',)
        }),
        ('About Train Confidential informations', {
            'fields': ('train_info',)
        }),
    )
    pass
























