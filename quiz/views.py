from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Count
from .models import Topic, Quiz, Question, Result
from .forms import QuizForm, QuestionForm


def home_view(request):
	objects = Quiz.objects.annotate(number_of_question=Count('question'))
	form1 = QuizForm()
	form2 = QuestionForm()
	context = {
		'objects': objects,
		'form1': form1,
		'form2': form2,
	}

	return render(request, 'quiz/main.html', context)
	

def create_quiz(request):
	if request.is_ajax():
		form = QuizForm(request.POST)
		if form.is_valid():
			print('hi')
			instance = form.save(commit=False)
			instance.created_by = request.user
			instance.save()
		return JsonResponse({})


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


def save_answer_view(request, pk):
	if request.is_ajax():
		answer = request.POST
		answer_ = dict(answer.lists())
		answer_.pop('csrfmiddlewaretoken')
		quiz = Quiz.objects.get(pk=pk)
		user = request.user
		questions = [
			Question.objects.get(question_text=key, quiz=quiz)
			for key in answer_.keys()
		]

		score = 0
		results = []
		for q in questions:
			message = ""
			ans = answer_[q.question_text][0]
			if (ans.isdigit() and int(ans) == q.correct_num):
				score += 1
				message = "Correct!"
			else:
				message = f"Your answer: {ans}, Correct: {q.correct_num}"
			results.append({str(q.question_text): message})
		score_ = score * 100 / quiz.num_of_question

		# Save result
		# Result.objects.create(quiz=quiz, user=user, score=score_)

		return JsonResponse({'results': results, 'score': score_})