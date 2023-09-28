1.  django-admin startproject translation_tutorial
2.  python3 -m venv venv
3.  source venv/bin/activate
4.  pip install django
5.  django-admin startapp core
6.  create url in core
7.  create view in core
8.  create models in core
9.  refactor url in core
10. create serializers in core
11. create templates in main project
12. update setting files

            INSTALLED_APPS = [
            'django.contrib.admin',
            'django.contrib.auth',
            'django.contrib.contenttypes',
            'django.contrib.sessions',
            'django.contrib.messages',
            'django.contrib.staticfiles',

                'core',
                'rosetta',
                'parler',
                "rest_framework",

            ]

        LANGUAGE_CODE = 'en'

        LANGUAGES = [
        ('en', _('English')),
        ('fa', _('Persian')),
        ('tr', _('Turkish')),
        ('fr', _('French')),
        ('es', _('Spanish')),
        ('ar', _('Arabic')),
        ]

        PARLER_LANGUAGES = {
        None: (
        {'code': 'en', },
        {'code': 'fa', },
        {'code': 'tr', },
        {'code': 'fr', },
        {'code': 'es', },
        {'code': 'ar', },
        ),
        'default': {
        'fallbacks': ['en'],
        'hide_untranslated': False,
        'domain_name': None,
        }
        }

            'DIRS': [os.path.join(BASE_DIR / 'templates/')],

13. install gettext and rosetta
14. create locale folder
15. create (en, fr, es) etc. folder
16. run django-admin makemessages -all
17. run django-admin compilemessages
18. run django-admin runserver
19. pip install django-parler
20. add parler to installed apps
21. add parler to admin.py
22. then do like this admin.site.register(Post, TranslatableAdmin)
23. add language to settings.py


