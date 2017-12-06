'use strict';

$(document).ready(function () {
	// var yellowImg = document.getElementById('yellowLady');
	// setInterval(function() {
	// 	yellowLady.style.display = (yellowLady.style.display == 'none' ? '' : 'none');
	// }, 200);

});

$('.allTheText').hover(function () {
	$(this).find('.heroText1').hide();
	$(this).find('.heroTextInner1').hide();
	$(this).find('.heroText2').show();
	$(this).find('.heroTextInner2').show();
	$(this).find('.heroText3').show();
	$(this).find('.heroTextInner3').show();
	$(this).find('.heroText4').show();
	$(this).find('.heroTextInner4').show();
}, function () {
	$(this).find('.heroText1').show();
	$(this).find('.heroTextInner1').show();
	$(this).find('.heroText2').hide();
	$(this).find('.heroTextInner2').hide();
	$(this).find('.heroText3').hide();
	$(this).find('.heroTextInner3').hide();
	$(this).find('.heroText4').hide();
	$(this).find('.heroTextInner4').hide();
});

$('.allTheText').hover(function () {
	$(this).addClass('hover');
}, function () {
	$(this).removeClass('hover');
});

// App.init = () => {
// 	App.events();
// } //end of init();

// $(function() {
// 	App.init();
// });