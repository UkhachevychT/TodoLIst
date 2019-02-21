from django.db import models

class IntegerRangeField(models.IntegerField):
    def __init__(self, verbose_name=None, name=None, min_value=None, max_value=None, **kwargs):
        self.min_value, self.max_value = min_value, max_value
        models.IntegerField.__init__(self, verbose_name, name, **kwargs)

    def formfield(self, **kwargs):
        defaults = {'min_value': self.min_value, 'max_value':self.max_value}
        defaults.update(kwargs)
        return super(IntegerRangeField, self).formfield(**defaults)

class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    class Meta():
        ordering = ['title']

    def __str__(self):
        return self.title

class Todo(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    dueDate = models.DateField(null=True, blank=True)
    priority = IntegerRangeField(min_value=1, max_value=5)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True)

    class Meta():
        ordering = ['-priority', 'dueDate', 'title']

    def __str__(self):
        return self.title