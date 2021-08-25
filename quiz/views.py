from django.shortcuts import render
from django.views.generic import ListView
from .models import Topic, Quiz, Question, Result

class QuizListView(ListView):
	model = Quiz
	template_name = 'quiz/main.html'


# def quiz_list_create(request):
# 	return render(request, 'quizes/main.html')