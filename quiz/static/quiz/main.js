const url = window.location.href

const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalTitle = document.getElementById('modalTitle')
const startBtn = document.getElementById('start-button')
const quizView = document.getElementById('quiz-list-view')

const quizUrl = window.location.href + "add/"
const quizForm = document.getElementById('quiz-form')

const quizTitleInput = document.getElementById('id_quiz_title')
const topicInput = document.getElementById('id_topic')
const numOfQuestionInput = document.getElementById('id_num_of_question')
const timeInput = document.getElementById('id_time')

const csrf = document.getElementsByName('csrfmiddlewaretoken')


modalBtns.forEach(modalBtn => modalBtn.addEventListener('click', () => {
	const pk = modalBtn.getAttribute('data-pk')
	const title = modalBtn.getAttribute('data-quiz')
	modalTitle.innerHTML = title

	startBtn.addEventListener('click', () => {
		// quizView.classList.add('not-visible')
		window.location.href = url + pk
	});
}))


quizForm.addEventListener('submit', e=> {
	e.preventDefault()

	$.ajax({
		type: 'POST',
		url: quizUrl,
		data: {
			'csrfmiddlewaretoken': csrf[0].value,
			'quiz_title': quizTitleInput.value,
			'topic': topicInput.value,
			'num_of_question': numOfQuestionInput.value,
			'time': timeInput.value
		},
		success: function(response) {
			$('#addQuiz').modal('hide')
			quizForm.reset()
		},
		error: function(error) {
			console.log('Oops... error has occured')
			console.log(error)
		}
	})
})

