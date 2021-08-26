from django.shortcuts import render
from django.views.generic import ListView
from django.http import JsonResponse
from .models import Topic, Quiz, Question, Result


class QuizListView(ListView):
	model = Quiz
	template_name = 'quiz/main.html'


def question_view(request, pk):
	quiz = Quiz.objects.get(pk=pk)
	questions = quiz.get_questions()
	return render(request, 'quiz/question.html', 
		{
		'quiz': quiz,
		'que':  questions,
		}
	)

# def questions_view(request, pk):
# 	quiz = Quiz.objects.get(pk=pk)
# 	questions = []
# 	for q in quiz.get_questions():
# 		questions.append({str(q)})
# 	return JsonResponse({
# 		'data': questions,
# 	})
	# pass