from django.urls import path
from apps.goosepond.views.index import Index
from apps.goosepond.views.thera import Therapy
from apps.goosepond.views.goosename import NameComponent, NameGenerator

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('therapy/', Therapy.as_view(), name='therapy'),
    path('goosename/', NameGenerator.as_view(), name='goosename'),
    path('goosename/generate_name', NameComponent.as_view(), name='goose_name_component'),
]