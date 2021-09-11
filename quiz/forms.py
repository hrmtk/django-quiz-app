from django import forms
from .models import Quiz, Question

class QuizForm(forms.ModelForm):
	class Meta:
		model = Quiz
		exclude = ['created_by']
		# fields = ('quiz_title', 'topic', 'num_of_question', 'time',)


class QuestionForm(forms.ModelForm):
	class Meta:
		model = Question
		fields = "__all__"