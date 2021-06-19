from django.shortcuts import render

# Create your views here.
def booking(request):
    return render(request,'Flights-Booking.html')


def booking_details(request):
    return render(request,'Flight-Home.html')



