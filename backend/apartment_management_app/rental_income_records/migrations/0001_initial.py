# Generated by Django 4.2 on 2023-04-26 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RentalIncomeRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('apartment_number', models.IntegerField(default=0, verbose_name='Apartment Number')),
                ('january', models.FloatField(default=0.0, verbose_name='January')),
                ('february', models.FloatField(default=0.0, verbose_name='February')),
                ('march', models.FloatField(default=0.0, verbose_name='March')),
                ('april', models.FloatField(default=0.0, verbose_name='April')),
                ('may', models.FloatField(default=0.0, verbose_name='May')),
                ('june', models.FloatField(default=0.0, verbose_name='June')),
                ('july', models.FloatField(default=0.0, verbose_name='July')),
                ('august', models.FloatField(default=0.0, verbose_name='August')),
                ('september', models.FloatField(default=0.0, verbose_name='September')),
                ('october', models.FloatField(default=0.0, verbose_name='October')),
                ('november', models.FloatField(default=0.0, verbose_name='November')),
                ('december', models.FloatField(default=0.0, verbose_name='December')),
            ],
        ),
    ]
