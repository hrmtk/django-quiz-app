const url = window.location.href

$.ajax({
	type: 'GET',
	url: `${url}/detail`,
	success: function(res) {
		const data = res.data
		const ques = res.ques
		console.log(data, ques)
	},
	error: function(error) {
		console.log('error', error)
	}
})