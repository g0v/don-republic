from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'main.views.home', name='home'),
    # url(r'^main/', include('main.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$', TemplateView.as_view(template_name = "index.jade")),
    url(r'^qa/$', TemplateView.as_view(template_name = "qa/index.jade")),
    url(r'^motion/$', TemplateView.as_view(template_name = "motion/index.jade")),
    url(r'^motion/propose/$', TemplateView.as_view(template_name = "motion/propose.jade")),
    url(r'^motion/analyze/$', TemplateView.as_view(template_name = "motion/analyze.jade")),
    url(r'^motion/project/$', TemplateView.as_view(template_name = "motion/project.jade")),
    url(r'^project/$', TemplateView.as_view(template_name = "project/index.jade")),
    url(r'^propose/$', TemplateView.as_view(template_name = "propose/index.jade")),
    url(r'^accounts/', include('allauth.urls')),
)
