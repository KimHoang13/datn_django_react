from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    is_tutor = models.BooleanField(default=False)


    def __str__(self):
        return self.username
    

class Subject(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class Session(models.Model):
    id = models.IntegerField(primary_key=True)
    day_sun = models.CharField(max_length=100)
    session = models.IntegerField()


class Lesson(models.Model):
    id= models.AutoField(primary_key=True)
    subject_id = models.ForeignKey(Subject, on_delete=models.CASCADE)
    tutor_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    session_id = models.ForeignKey(Session,on_delete=models.CASCADE)
    date = models.DateField()

class Booking(models.Model):
    id = models.AutoField(primary_key=True)
    lesson_id = models.ForeignKey(Lesson,on_delete=models.CASCADE)
    student_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.BooleanField(default=False)

