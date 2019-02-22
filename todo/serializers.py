from rest_framework import serializers
from .models import Todo, Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta():
        model = Project
        fields = ('id', 'title', 'description')

class TodoSerializer(serializers.ModelSerializer):
    class Meta():
        model = Todo
        fields = (
            'id',
            'title',
            'description',
            'dueDate',
            'priority',
            'project',    
        )