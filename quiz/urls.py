from django.urls import path
from .views import (
	QuizListView,
	# quiz_list_create,
)

app_name = 'quizes'

urlpatterns = [
	path('', QuizListView.as_view(), name='quiz_list'),
]