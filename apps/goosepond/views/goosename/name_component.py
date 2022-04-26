from django.views import View
from django.shortcuts import render
import logging
from apps.goosepond.utils.namegoosifier import goosify

log = logging.getLogger('goosepond')

class NameComponent(View):
    def post(self, request):
        """Render the goosename component."""
        gooseinput = request.POST.get("gooseinput")
        log.critical(list(request.POST.items()))
        return render(
            request,
            "components/goosename.html",
            {"goosename": goosify(gooseinput)}
        )

