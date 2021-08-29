const url = window.location.href
const quizBox = document.getElementById("quiz-box")
const alertBox = document.getElementById('alert-box')

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
					<div class="mb-2 ${key}">
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
				quizBox.innerHTML +=	`
					<div id="${key}-msg"></div>
				`
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

	$.ajax({
		type: 'POST',
		url: `${url}/save`,
		data: answered,
		success: function(res) {
			results = res.results
			score = res.score

			results.forEach(result => {
				for (const [question, message] of Object.entries(result)) {
					const ansChecked = document.getElementById(`${question}-msg`)
					ansChecked.innerText = message;
				}
			})
			handleAlerts('success', 'success')
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