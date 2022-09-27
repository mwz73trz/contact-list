# Generated by Django 4.1.1 on 2022-09-27 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=25)),
                ('zipcode', models.CharField(max_length=5)),
                ('phone', models.CharField(default='XXX-XXX-XXXX', max_length=12)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
    ]