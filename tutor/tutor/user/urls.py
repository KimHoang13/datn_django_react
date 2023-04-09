from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'User', UserViewSet)
router.register(r'Lesson', LessonViewSet)
router.register(r'Subject', SubjectViewSet)
router.register(r'Booking', BookingViewSet)
router.register(r'Session', SessionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]