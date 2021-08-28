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
	ques = quiz.get_questions()
	questions = []
	for q in ques:
		# ques_answers = {
		# 	"question": q.question_text,
		# 	"ans1": q.option_one,
		# }
		ques_answers = [
			q.option_one,
			q.option_two,
			q.option_three,
			q.option_four
		]
		questions.append({q.question_text: ques_answers})

	return JsonResponse({
		'data': quiz.quiz_title,
		'questions': questions,
	})