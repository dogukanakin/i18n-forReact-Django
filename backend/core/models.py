from django.db import models
from django.utils.translation import gettext_lazy as _
from parler.models import TranslatableModel, TranslatedFields


class Category(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(max_length=50),
    )

    class Meta:
        verbose_name = _("category")
        verbose_name_plural = _("categories")

    def __str__(self):
        return self.safe_translation_getter('name', str(self.id))


class Post(TranslatableModel):
    category = models.ForeignKey(Category, related_name=_(
        'category'), on_delete=models.SET_NULL, null=True)
    translations = TranslatedFields(
        title=models.CharField(_('title'), max_length=50),
        content=models.TextField(_('content')),
    )

    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created',)
        verbose_name = _("post")
        verbose_name_plural = _("posts")

    def __str__(self):
        return self.title


class MovieName(models.Model):
    nameEn = models.CharField(max_length=100)
    nameTr = models.CharField(max_length=100)
    nameAr = models.CharField(max_length=100)
    nameFr = models.CharField(max_length=100)
    year = models.IntegerField()

    def __str__(self):
        return self.nameEn


class List(models.Model):
    name = models.CharField(max_length=500, null=True,
                            blank=True, verbose_name="Sektör Tanımı")
    name_en = models.CharField(
        max_length=500, null=True, blank=True, verbose_name="Sektör Tanımı (İngilizce)")

    def __str__(self):
        return self.name

    def name_trans(self):

        site_settings = SiteSettings.objects.first()
        if site_settings.language == "en":
            return self.name_en
        elif site_settings.language == "tr":
            return self.name
        else:
            return ""
        

class SiteSettings(models.Model):
    language = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.language
