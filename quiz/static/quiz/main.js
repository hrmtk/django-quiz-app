const url = window.location.href;

const startModals = [...document.getElementsByClassName('start-modal')];
const modalTitle = document.getElementById('modalTitle');
const startBtn = document.getElementById('start-button');

const addModals = [...document.getElementsByClassName('add-modal')];
const addTitle = document.getElementById('addModal');
const addForm = document.getElementById('add-form');

const questionTextInput = document.getElementById('id_question_text');
const correctNumInput = document.getElementById('id_correct_num');
const optionOneInput = document.getElementById('id_option_one');
const optionTwoInput = document.getElementById('id_option_two');
const optionThreeInput = document.getElementById('id_option_three');
const optionFourInput = document.getElementById('id_option_four');

const quizForm = document.getElementById('quiz-form');
const quizCard = document.getElementById('quiz-card');

const quizTitleInput = document.getElementById('id_quiz_title');
const topicInput = document.getElementById('id_topic');
const numOfQuestionInput = document.getElementById('id_num_of_question');
const timeInput = document.getElementById('id_time');

const csrf = document.getElementsByName('csrfmiddlewaretoken');


startModals.forEach(startModal => startModal.addEventListener('click', () => {
	const pk = startModal.getAttribute('data-pk');
	const title = startModal.getAttribute('data-quiz');
	modalTitle.innerHTML = title;

	startBtn.addEventListener('click', () => {
		window.location.href = url + pk;
	});
}))

addModals.forEach(addModal => addModal.addEventListener('click', () => {
	const pk = addModal.getAttribute('data-pk');
	const title = addModal.getAttribute('data-quiz');
	
	addForm.dataset.formId = pk;
	addTitle.innerHTML = title;
}))


addForm.addEventListener('submit', e=> {
	e.preventDefault();
	const quizId = e.target.getAttribute('data-form-id');
	console.log(quizId)

	$.ajax({
		type: 'POST',
		url: '/add/',
		data: {
			'csrfmiddlewaretoken': csrf[0].value,
			'pk': quizId,
			'question_text': questionTextInput.value,
			'correct_num': correctNumInput.value,
			'option_one': optionOneInput.value,
			'option_two': optionTwoInput.value,
			'option_three': optionThreeInput.value,
			'option_four': optionFourInput.value
		},
		success: function(response) {
			const numOfQestion = document.getElementById(`numq-card-${quizId}`);
			numOfQestion.innerHTML = `${parseInt(numOfQestion.innerHTML) + 1}`;
			$('#addQuestion').modal('hide');
			addForm.reset();
		},
		error: function(error) {
			console.log('Oops... error has occured');
			console.log(error);
		}
	})
})

quizForm.addEventListener('submit', e=> {
	e.preventDefault();

	$.ajax({
		type: 'POST',
		url: '/create/',
		data: {
			'csrfmiddlewaretoken': csrf[0].value,
			'quiz_title': quizTitleInput.value,
			'topic': topicInput.value,
			'num_of_question': numOfQuestionInput.value,
			'time': timeInput.value
		},
		success: function(response) {
      window.location.href = window.location.origin
			$('#createQuiz').modal('hide');
			quizForm.reset();
		},
		error: function(error) {
			console.log('Oops... error has occured');
			console.log(error);
		}
	})
})