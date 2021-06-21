from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

# Create your views here.
# from train.forms import SignUpForm


def booking(request):
    return render(request, 'Flights-Booking.html')


def booking_details(request):
    return render(request, 'Flight-Home.html')


def about(request):
    return render(request, 'About.html')


def contact(request):
    return render(request, 'Contact.html')


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

