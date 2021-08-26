

$.ajax({
	type: 'GET',
	url: `${url}data`,
	success: function(res) {
		const data = response.data
		// console.log(data)
	},
	error: function(error) {
		console.log(error)
	}
})