"""Railway URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import include,url
from django.urls import NoReverseMatch, reverse
from . import views

body_class = "travel_home"
body_class2 = ""


urlpatterns = [
    path('home/', views.index, name='index-page'),
    path('booking/', views.booking, name='booking'),
    path('About/', views.about, name='about_us'),
    path('schedule/',views.schedule, name='schedule'),
    path('Contact/', views.contact, name='contact_us'),
    path('Coming-soon/', views.comingsoon, name='coming_soon'),
    path('<slug:anything>',views.error404, name='error404')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)






















































# shobar niche thakbe
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
