from django.urls import path
from .views import (
	QuizListView,
	question_view,
	question_detail_view,
)

app_name = 'quiz'

urlpatterns = [
	path('', QuizListView.as_view(), name='quiz_list'),
	path('<pk>', question_view, name='question_view'),
	path('<pk>/detail', question_detail_view, name='question_detail_view'),
]