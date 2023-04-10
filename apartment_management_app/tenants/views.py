from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Student
from .serializers import *

@api_view(['GET', 'POST'])
# Create your views here.
def tenants_list(request):
    if request.method == 'GET':
        data = Tenant.objects.all()

        serializer = TenantSerializer(data, context={'request' : request}, many = True)
        return Response(serializer.data)                           
    elif request.method == 'POST':
        serializer = TenantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE'])
def tenants_detail(request, pk):
    try:
        tenant = Tenant.objects.get(pk=pk)
    except Tenant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = TenantSerializer(tenant, data=request.data, context={'request' : request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        tenant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
