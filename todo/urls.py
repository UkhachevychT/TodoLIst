from django.urls import path

from . import views

urlpatterns = [
    path('project/', views.ProjectList.as_view()),
    path('project/<int:pk>/', views.ProjectDetail.as_view()),
    path('todo/', views.TodoList.as_view()),
    path('todo/<int:pk>/', views.TodoDetail.as_view()),
]