from django.db import models

# Create your models here.


class Item(models.Model): 
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    nickname = models.CharField(max_length=100, null=True)
    age = models.CharField(max_length=100, null=True)
    religion = models.CharField(max_length=100, null=True)
    contact_num= models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=150, null=True)
    address = models.CharField(max_length=150, null=True)
    code = models.CharField(max_length=150, null=True)
    birthday = models.CharField(max_length=150, null=True)
    birthplace = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=100, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    course = models.CharField(max_length=100, null=True)
    student_id = models.CharField(max_length=100, null=True)
    year_level = models.CharField(max_length=100, null=True)
    school = models.CharField(max_length=100, null=True)
    mothers_name = models.CharField(max_length=100, null=True)
    mothers_occupation = models.CharField(max_length=100, null=True)
    mothers_contact = models.CharField(max_length=100, null=True)
    fathers_name = models.CharField(max_length=100, null=True)
    fathers_occupation = models.CharField(max_length=100, null=True)
    fathers_contact = models.CharField(max_length=100, null=True)
    
    







    def __str__(self) -> str:
        return super().__str__()