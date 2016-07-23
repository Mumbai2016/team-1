from django.contrib import admin

from models import *

# Register your models here.

admin.site.index_title = 'LiveADream'
admin.site.site_title = 'LiveADream'

admin.site.register(Centre)
admin.site.register(Student)
admin.site.register(Mentor)
admin.site.register(Workshop)
admin.site.register(Meeting)
admin.site.register(Program)

