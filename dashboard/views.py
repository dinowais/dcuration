# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView
from data_investigator import data as inv_data


# Create your views here.
class DashboardView(TemplateView):
    template_name = 'created.html'

    def get(self, request, *args, **kwargs):
        return self.render_to_response(context={'data': inv_data})

class InvestigatorPotentalMatchesView(TemplateView):
    template_name = 'potential_matches.html'

    def get(self, request, *args, **kwargs):
        return self.render_to_response(context={'data': inv_data})

class InvestigatoeMergeView(TemplateView):
    template_name = 'main.html'

    def get(self, request, *args, **kwargs):
        return self.render_to_response(context={'data': inv_data})
