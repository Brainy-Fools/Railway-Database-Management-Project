from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

# Create your views here.
# from train.forms import SignUpForm

# from django.utils.crypto import get_random_string
#     ticket_no = get_random_string(length=8,allowed_chars=string.ascii_uppercase + string.digits + string.ascii_lowercase)
#     setattr(ticket,ticket_id,ticket_no)

def booking(request):
    return render(request, 'Flights-Booking.html')


def booking_details(request):
    return render(request, 'Flight-Home.html')


def about(request):
    return render(request, 'About.html')


def contact(request):
    return render(request, 'Contact.html')

def comingsoon(request):
    return render(request,'Coming_soon.html')

# def signup(request):
#     if request.method == 'POST':
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             raw_password = form.cleaned_data.get('password1')
#             user = authenticate(username=username, password=raw_password)
#             login(request, user)
#             return redirect('booking')
#     else:
#         form = SignUpForm()
#     return render(request, 'Flights-Booking.html', {'form': form})

