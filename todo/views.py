from django.shortcuts import render
from rest_framework import generics

from .models import Project, Todo
from .serializers import ProjectSerializer, TodoSerializer


class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TodoList(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class =TodoSerializer

class TodoDetail(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class =TodoSerializer