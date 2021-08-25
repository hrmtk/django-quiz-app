from django.contrib import admin
from .models import Topic, Quiz, Question, Result


class QuizInline(admin.TabularInline):
	model = Quiz


class TopicAdmin(admin.ModelAdmin):
	inlines = [QuizInline]


class QuestionInline(admin.TabularInline):
	model = Question


class QuizAdmin(admin.ModelAdmin):
	inlines = [QuestionInline]



admin.site.register(Topic, TopicAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Question)
admin.site.register(Result)
