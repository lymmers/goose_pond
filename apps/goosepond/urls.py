from django.urls import path

from apps.goosepond.views.index import Index
from apps.goosepond.views.thera import Therapy

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('therapy/', Therapy.as_view(), name='therapy')
]