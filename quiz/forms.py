from django import forms
from .models import Quiz, Question

class QuizForm(forms.ModelForm):
	class Meta:
		model = Quiz
		exclude = ['created_by']


class QuestionForm(forms.ModelForm):
	class Meta:
		model = Question
		exclude = ['quiz']