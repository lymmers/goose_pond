from django.views import View
from django.shortcuts import render


GEESE = [
    {"url": "https://google.com", "flipped": True, "image": "images/pilgrim_goose.png"}, 
    {"url": "https://yahoo.com", "flipped": False, "image": "images/embden_goose.png"}, 
    {"url": "/therapy", "flipped": True, "image": "images/therapy_goose.png"},
    {"url": "https://bing.com", "flipped": False, "image": "images/embden_goose.png"},
]

class Index(View):
    def get(self, request):
        """Our main index view."""
        return render(
            request,
            "index.html",
            {"geese": GEESE}
        )