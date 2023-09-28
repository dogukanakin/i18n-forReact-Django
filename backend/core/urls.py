from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from core.views import post_list, category_list


urlpatterns = [
    path('', views.index, name='index'),
    # lang değişkenini yakalamak için <str> kullanın
    path('api/posts/', post_list, name='post-list'),
    path('api/categories/', views.category_list),
    path('api/movies/', views.movie_list),
    path('api/settings/', views.settings_list),
    path('api/lists/', views.list_list),
]
