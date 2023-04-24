"""
URL configuration for apartment_management_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import path, re_path
from tenants import views as tenant_views
from users import views as user_views
from expense_records import views as expense_views
from rental_income_records import views as rental_views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/tenants/$', tenant_views.tenants_list),
    re_path(r'^api/tenants/([0-9])', tenant_views.tenants_detail),

    re_path(r'^api/users/$', user_views.users_list),
    re_path(r'^api/users/([0-9])$', user_views.users_detail),
    re_path(r'^api/users/register$', user_views.register_user),

    re_path(r'^api/expense_records/$', expense_views.expense_records_list),
    re_path(r'^api/expense_records/([0-9])$', expense_views.expense_records_detail),

    re_path(r'^api/rental_income_records/$', rental_views.rental_income_records_list),
    re_path(r'^api/rental_income_records/([0-9])$', rental_views.rental_income_records_detail)
]
