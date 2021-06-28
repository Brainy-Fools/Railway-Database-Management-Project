from .models import *

global everyWhere
# in adminPlace it should be this : hidden
def add_variable_to_context(request):
    ticket_data = ticket.objects.order_by('ticket_class').values_list('ticket_class', flat=True).distinct()
    train_data = train_info.objects.all()
    route_data = route.objects.all().select_related()
    # route_data.filter()
    everyWhere =  {
        'everyTicket' : ticket_data,
        'everyTrain' : train_data.order_by('train_name').distinct(),
        'everyRoute' : route_data,
        'test' : 'MasumBhai The Full stack Developer',
        'adminPlace' : ''
    }
    return everyWhere