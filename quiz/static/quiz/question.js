const url = window.location.href
const quizBox = document.getElementById("quiz-box")

$.ajax({
	type: 'GET',
	url: `${url}/detail`,
	success: function(res) {
		const data = res.data
		const questions = res.questions
		questions.forEach(el => {
			Object.keys(el).forEach(function(key) {

				quizBox.innerHTML += `
					<hr>
					<div class="mb-2">
						<b>${key}</b>
					</div>
					`
					el[key].forEach(answer => {
						quizBox.innerHTML += `
							<div>
								<input type="radio" class="answer" id="${key}-${answer}" name="${key}" value="${answer}">
								<label for="${key}">${answer}</label>
							</div>
						`
					})
			})
		})
	},
	error: function(error) {
		console.log('error', error)
	}
})

const quizForm = document.getElementById('quiz-form')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

const sendAnswer = () => {
	const elements = [...document.getElementsByClassName('answer')]
	const answered = {}
	answered['csrfmiddlewaretoken'] = csrf[0].value
	elements.forEach(el => {
		if (el.checked) {
			answered[el.name] = el.value
		} else {
			if (!answered[el.name]) {
				answered[el.name] = null
			}
		}
	})
	// console.log(answered)

	$.ajax({
		type: 'POST',
		url: `${url}/save`,
		data: answered,
		success: function(res) {
			console.log('success');
		},
		error: function(error) {
			console.log(error);
		}
	})
}

quizForm.addEventListener('submit', e=> {
	e.preventDefault()
	sendAnswer()
})