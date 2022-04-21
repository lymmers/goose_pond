from django.views import View
from django.shortcuts import render


GEESE = [
    {"url": "https://google.com", "flipped": True, "image": "images/geese/pilgrim_goose.png"},
    {"url": "https://lemonsaur.us", "flipped": False, "image": "images/geese/lemon-duck.png"},
    {"url": "/therapy", "flipped": True, "image": "images/geese/therapy_goose.png"},
    {"url": "https://bing.com", "flipped": False, "image": "images/geese/embden_goose.png"},
]

class Index(View):
    def get(self, request):
        """Our main index view."""
        return render(
            request,
            "pages/index.html",
            {"geese": GEESE}
        )