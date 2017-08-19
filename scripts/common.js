$('a').on('click', (e) => {
	e.preventDefault();
	setTimeout(function() {
		alert("hi")
	},1000)
});