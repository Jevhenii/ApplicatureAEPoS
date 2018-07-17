
// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#0C090A', '#0C090A', '#0C090A', '#0C090A', '#0C090A'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', '#9E2F41');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
});

$(document).ready(function() { 
  menu_link = $('.widget_nav_menu .menu .menu-item-has-children a'),
  sub_menu = $('.widget_nav_menu .menu li .sub-menu');   
  
  menu_link.on('click', function() {   
    
    if (!$(this).hasClass('active')) {
      sub_menu.slideUp(300,'swing');
        $(this).next().stop(true,true).slideToggle(300);
      menu_link.removeClass('active');
        $(this).addClass('active');
    } 
    else {
      sub_menu.slideUp(300);
      menu_link.removeClass('active');
    }
    
  });

});

// Mooooooree canvas ^_____^

let canvas_descr = document.getElementById('canvas-descr'),
atx = canvas_descr.getContext('2d'),
btx = canvas_descr.getContext('2d'),
dp = window.devicePixelRatio;
function fix_dp() {
let style = {
    height() {
    return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
    },
    width() {
    return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
    }
}
canvas_descr.setAttribute('width', style.width() * dp);
canvas_descr.setAttribute('height', style.height() * dp);
}
// function for Fixing HTML5 2d Canvas Blur 
function draw() {
//call the dpi fix every time 
//canvas is redrawn
fix_dp();
//draw stuff!
// top-left
atx.setLineDash([6, 4, 2, 4]);
atx.beginPath();
atx.moveTo(624, 30);
atx.strokeStyle = '#ffffff';
atx.lineTo(624, 360);
atx.stroke();
// center   
btx.setLineDash([6, 4, 2, 4]);
btx.beginPath();
btx.moveTo(624, 540);
btx.strokeStyle = '#ffffff';
btx.lineTo(624, 850);
btx.stroke();
requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

var aspectRatio = 1.5;    // height:width = 3:2
canvas_descr.height = canvas_descr.width * aspectRatio;

// Mooooooree canvas ^_____^

