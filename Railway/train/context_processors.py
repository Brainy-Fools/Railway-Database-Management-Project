from .models import *

global everyWhere
# in adminPlace it should be this : hidden
def add_variable_to_context(request):
    ticket_data = ticket.objects.all()
    train_data = train_info.objects.all()
    route_data = route.objects.all()
    route_data.filter()
    everyWhere =  {
        'everyTicket' : ticket_data,
        'everyTrain' : train_data,
        'everyRoute' : route_data,
        'test' : 'MasumBhai The Full stack Developer',
        'adminPlace' : ''
    }
    return everyWhere