from django.db import models
from django.contrib.auth.models import User
import random

TOPIC_CHOICES = (
	('Computer Science', 'Computer Science'),
	('Math and Logic', 'Math and Logic'),
	('Language Learning', 'Language Learning'),
	('Health', 'Health'),
	('Others', 'Others'),
)


class Topic(models.Model):
	topic_title = models.CharField(max_length=30, choices=TOPIC_CHOICES)

	def __str__(self):
		return str(self.topic_title)


class Quiz(models.Model):
	quiz_title = models.CharField(max_length=200)
	topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
	num_of_question = models.IntegerField()
	time = models.IntegerField(help_text='duration of the quiz in minutes')
	# required_score = models.IntegerField(help_text="required score in %")
	created_by = models.ForeignKey(User, on_delete=models.CASCADE)
	# created_time = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.quiz_title)

	def get_questions(self):
		questions = list(self.question_set.all())
		random.shuffle(questions)
		return questions

	class Meta:
		verbose_name_plural = 'Quizzes'
		# ordering = ("-created_time",)


class Question(models.Model):
	question_text = models.CharField(max_length=200)
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
	correct_num = models.IntegerField()
	option_one = models.CharField(max_length=200)
	option_two = models.CharField(max_length=200)
	option_three = models.CharField(max_length=200)
	option_four = models.CharField(max_length=200)

	def __str__(self):
		return f"{self.question_text} - correct: {self.correct_num}"


class Result(models.Model):
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	score = models.FloatField()
	created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.quiz} - {self.user} - {self.score}% - {self.created}"