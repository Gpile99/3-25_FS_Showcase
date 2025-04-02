from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=50)
    release_year = models.IntegerField()

    def __str__(self):
        return self.title

class PublicMarker(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    description = models.TextField(blank=True, null=True)
    source = models.CharField(max_length=255)  # Example: "City Library Dataset"
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
