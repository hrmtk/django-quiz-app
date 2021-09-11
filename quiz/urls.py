from django.urls import path
from .views import (
	home_view,
	add_quiz,
	question_view,
	question_detail_view,
	save_answer_view,
)

app_name = 'quiz'

urlpatterns = [
	path('', home_view, name='home_view'),
	path('add/', add_quiz, name='add_quiz'),
	path('<pk>/', question_view, name='question_view'),
	path('<pk>/detail/', question_detail_view, name='question_detail_view'),
	path('<pk>/save/', save_answer_view, name='save_answer_view'),
]