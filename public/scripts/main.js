'use strict';

$(document).ready(function () {
  var bars = $('.menu-bar');
  var menu = $('#menu');
  var menuButton = $('.menu-button');
  var timeline = new TimelineMax({ paused: true });
  var open = false;

  timeline.to(bars[0], 0.1, {
    top: '7px',
    rotation: 45
  }, 0).to(bars[1], 0.1, {
    opacity: 0
  }, 0).to(bars[2], 0.1, {
    top: '-7px',
    rotation: -45
  }, 0).to(menu, 0.4, {
    width: '30%', // width
    height: '0.5%'
  }, '-=0.2').to(menu, 0.4, {
    height: '100%',
    ease: Bounce.easeOut
  }, '-=0.2').to(menu.find('a'), 0.4, {
    opacity: 1
  });

  menuButton.on('click', function () {
    $(this).toggleClass('active');
    if (open) {
      timeline.reverse();
      open = false;
    } else {
      timeline.play();
      open = true;
    }
  });

  menu.find('a').on('click', function () {
    timeline.reverse();
  });
});

// STROBE LADIES
$(document).ready(function () {
  var ladies = document.getElementById('multiLady');
  setInterval(function () {
    multiLady.style.display = multiLady.style.display == 'none' ? '' : 'none';
  }, 150);
});

// App.init = () => {
// 	App.events();
// } //end of init();

// $(function() {
// 	App.init();
// });