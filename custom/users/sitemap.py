from custom.users.models import AboutUs
from django.contrib.sitemaps import Sitemap


class ContactUsSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.7

    def items(self):
       pass

    def lastmod(self, obj):
        return obj.date_published

    def location(self, item):
        return reverse(item)


class AboutUsSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.7

    def items(self):
       return AboutUs.objects.all

    def lastmod(self, obj):
        return obj.date_published

    def location(self, item):
        return reverse(item)
