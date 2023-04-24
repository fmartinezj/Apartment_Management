from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Rental_Income_Record
from .serializers import *

@api_view(['GET', 'POST'])
def rental_income_records_list(request):
    if request.method == 'GET':
        data = Rental_Income_Record.objects.all()

        serializer = Rental_Income_RecordSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = Rental_Income_RecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def rental_income_records_detail(request, pk):
    try:
        rental_income_record = Rental_Income_Record.objects.get(pk=pk)
    except Rental_Income_Record.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = Rental_Income_RecordSerializer(rental_income_record, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        rental_income_record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)