from django.urls import path

from apps.goosepond.views.index import Index

urlpatterns = [
    path('', Index.as_view(), name='index'),
]