from django.urls import path
from .views import get_books, create_book, book_detail, get_mapbox_token

urlpatterns = [
    path('books/', get_books, name='get_books'),
    path('books/create/', create_book, name='create_book'),
    path('books/<int:pk>', book_detail, name='book_detail'),
    path('mapbox-token/', get_mapbox_token, name='mapbox_token'),
]