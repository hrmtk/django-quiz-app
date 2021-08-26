const url = window.location.href

const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalTitle = document.getElementById('modalTitle')
const startBtn = document.getElementById('start-button')
const quizView = document.getElementById('quiz-list-view')

modalBtns.forEach(modalBtn => modalBtn.addEventListener('click', () => {
	const pk = modalBtn.getAttribute('data-pk')
	const title = modalBtn.getAttribute('data-quiz')
	modalTitle.innerHTML = title

	startBtn.addEventListener('click', () => {
		// quizView.classList.add('not-visible')
		window.location.href = url + pk
	});
}))


