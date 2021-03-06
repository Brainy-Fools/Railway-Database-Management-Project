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
# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static


from django.contrib import admin
from django.urls import path
from django.urls import include,re_path
from django.conf import settings
from django.views.generic import RedirectView
from django.conf.urls import include,url
import debug_toolbar

admin.site.site_header = "Brainy Fools"
admin.site.site_title = "Railway project DashBoard"
admin.site.index_title = "Welcome Admin"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='home/', permanent=True)),
    path('',include('train.urls')),
    path('__debug__/',include(debug_toolbar.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)






















































# shobar niche thakbe
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
