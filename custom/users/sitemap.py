from custom.users.models import AboutUs
from django.contrib.sitemaps import Sitemap


class AboutUsSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.7

    def items(self):
       return AboutUs.objects.all

