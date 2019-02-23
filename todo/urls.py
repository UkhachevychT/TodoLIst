from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('todo', views.TodoViewSet, base_name='todo')
router.register('project', views.ProjectViewSet, base_name='project')

urlpatterns = router.urls