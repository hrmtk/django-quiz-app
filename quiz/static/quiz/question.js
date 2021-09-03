// Get data
const url = window.location.href;
const quizBox = document.getElementById('quiz-box');
const alertBox = document.getElementById('alert-box');

$.ajax({
	type: 'GET',
	url: `${url}detail`,
	success: function(res) {
		const data = res.data;
		const questions = res.questions;
		questions.forEach(el => {
			Object.keys(el).forEach(function(key) {

				quizBox.innerHTML += `
					<hr>
					<div class="mb-2 ${key} h5">
						<b>${key}</b>
					</div>
					`
				let question_num = 0;
				el[key].forEach(answer => {
					quizBox.innerHTML += `
						<div>
							<label>${++question_num}.</label>
							<input type="radio" class="answer" id="${key}-${answer}" name="${key}" value="${answer}">
							<label for="${key}">${answer}</label>
						</div>
					`
				})
				quizBox.innerHTML +=	`
					<div id="${key}-msg" class="checked-msg"></div>
				`
			})
		})
		timer(10);
	},
	error: function(error) {
		console.log('error', error);
	}
})


// Send answer
const quizForm = document.getElementById('quiz-form');
const csrf = document.getElementsByName('csrfmiddlewaretoken');

const sendAnswer = () => {
	const elements = [...document.getElementsByClassName('answer')];
	const answered = {};
	answered['csrfmiddlewaretoken'] = csrf[0].value;
	elements.forEach(el => {
		if (el.checked) {
			answered[el.name] = el.value;
		} else {
			if (!answered[el.name]) {
				answered[el.name] = null;
			}
		}
	})

	$.ajax({
		type: 'POST',
		url: `${url}save/`,
		data: answered,
		success: function(res) {
			results = res.results;
			score = res.score;

			results.forEach(result => {
				for (const [question, message] of Object.entries(result)) {
					const ansChecked = document.getElementById(`${question}-msg`)
					ansChecked.innerText = message;
				}
			})
			handleAlerts('success', 'success');
		},
		error: function(error) {
			console.log(error);
		}
	})
}

quizForm.addEventListener('submit', e=> {
	e.preventDefault();
	sendAnswer();
	clearInterval(countdown)})


// Countdown timer
let countdown;
const timerDisplay = document.querySelector('.time-left');

function timer(seconds) {
	clearInterval(countdown);
	let timePassed = 0;
	seconds++;

	countdown = setInterval(() => {
		timePassed += 1;
		let timeLeft = seconds - timePassed;
		if (timeLeft === 0) {
			timerDisplay.innerHTML = '00:00';
			clearInterval(countdown);
			alert('Time over');
			sendAnswer();
		}
		timerDisplay.innerHTML = formatTime(timeLeft);
	}, 1000);
}

function formatTime(seconds) {
	const pad = function(s){ 
		return (s >= 10) ? s : `0${s}`;
	}
	return pad(parseInt(seconds / 60 % 60)) + 
		':' + pad(parseInt(seconds % 60));
}