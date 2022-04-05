from django.views import View
from django.shortcuts import render
import random

random.seed()

GEESE = [
    {"url": "https://google.com", "color": random.randint(0, 360), "flipped": True}, 
    {"url": "https://yahoo.com", "color": random.randint(0, 360), "flipped": False}, 
    {"url": "https://ask.com", "color": random.randint(0, 360), "flipped": True}, 
    {"url": "https://altavista.com", "color": random.randint(0, 360), "flipped": False}, 
]

class Index(View):
    def get(self, request):
        """Our main index view."""
        return render(
            request,
            "index.html",
            {"geese": GEESE}
        )