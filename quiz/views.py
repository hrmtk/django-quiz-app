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

def question_detail_view(request, pk):
	quiz = Quiz.objects.get(pk=pk)
	questions = quiz.get_questions()
	ques = []
	for q in questions:
		ques.append({str(quiz.quiz_title): q.correct_num})

	return JsonResponse({
		'data': quiz.quiz_title,
		'ques': ques,
	})