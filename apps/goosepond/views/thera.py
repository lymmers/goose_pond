from django.views import View
from django.shortcuts import render


class Therapy(View):
    def get(self, request):
        """Our main index view."""
        return render(
            request,
            "therapy.html",
        )