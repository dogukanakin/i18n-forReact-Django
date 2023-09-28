from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

# Diğer serializerlarınızı da buraya ekleyin...


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Post
        fields = ('category', 'title', 'content')  # İlgili alanları seçin


class MovieNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieName
        fields = ('nameEn', 'nameTr', 'nameAr', 'nameFr', 'year')


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('name_trans',)


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = ('language',)
