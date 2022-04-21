from django.views import View
from django.shortcuts import render


class NameGenerator(View):
    def get(self, request):
        """Render the goosename page."""
        return render(
            request,
            "pages/name_generator.html",
        )

