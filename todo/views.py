from django.shortcuts import render
from rest_framework import viewsets

from .models import Project, Todo
from .serializers import ProjectSerializer, TodoSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer