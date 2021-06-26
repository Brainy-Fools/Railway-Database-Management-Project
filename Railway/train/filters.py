import django_filters

from .models import *

class OrderFilter(django_filters.FilterSet):
    class Meta:
        model = train_info
        fields = '__all__'
