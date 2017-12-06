$(document).ready(function() {
	var yellowImg = document.getElementById('yellowLady');
	setInterval(function() {
		yellowLady.style.display = (yellowLady.style.display == 'none' ? '' : 'none');
	}, 200);

});


App.init = () => {
	App.events();
} //end of init();

$(function() {
	App.init();
});
