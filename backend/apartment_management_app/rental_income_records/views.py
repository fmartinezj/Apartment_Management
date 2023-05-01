from django.shortcuts import render
from django.db.models import F, Sum, FloatField
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import RentalIncomeRecord
from .serializers import *

@api_view(['GET', 'POST'])
# Create your views here.
def rental_records_list(request):
    if request.method == 'GET':
        data = RentalIncomeRecord.objects.all()

        serializer = RentalIncomeRecordSerializer(data, context={'request' : request}, many = True)
        return Response(serializer.data)                           
    elif request.method == 'POST':
        serializer = RentalIncomeRecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED, data=serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE'])
def rental_records_detail(request, pk):
    try:
        rental_income_record = RentalIncomeRecord.objects.get(pk=pk)
    except RentalIncomeRecord.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = RentalIncomeRecordSerializer(rental_income_record, data=request.data, context={'request' : request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        rental_income_record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
# Make an endpoint called rental_records_summary that returns the sum of rental records for all months and all rental properties
@api_view(['GET'])
def rental_records_summary(request):
    data = RentalIncomeRecord.objects.aggregate(Sum('total'))['total__sum']
    serializer = RentalIncomeRecordSummarySerializer(data={'total': data}, context={'request' : request})
    if serializer.is_valid():
        return Response(serializer.data)
    return Response(status=status.HTTP_404_NOT_FOUND)