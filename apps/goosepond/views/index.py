from django.views import View
from django.shortcuts import render


class Index(View):
    def get(self, request):
        """Our main index view."""
        return render(
            request,
            "index.html"
        )