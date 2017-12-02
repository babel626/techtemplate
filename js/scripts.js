
//menu button toggle function

$(document).ready(function(){
   $('body').css('overflowY', 'scroll'); 
   $('#loading-wrapper').css('display', 'none');
});

var open = 0;

function toggleMenu(x) {
    x.classList.toggle("change");
        $('.menuWrapper').css('display', '');
    if(open == 0){
        open++;
        $('.menuWrapper').removeClass('slideOutLeft');
        $('.menuWrapper').addClass('animated slideInLeft');
    }else{
        open--;
        $('.menuWrapper').removeClass('slideInLeft');
        $('.menuWrapper').addClass('animated slideOutLeft');
    }
}

$(document).scroll(function() { 
   if($(window).scrollTop() != 0 && open == 1) {
     console.log('true');
     open--;
       $('.menuButton').removeClass('change');
     $('.menuWrapper').removeClass('slideInLeft');
     $('.menuWrapper').addClass('animated slideOutLeft');
   }
});

$('.nightmode').click(function(){
    if(!$('.nightmode').hasClass('selected')){
    $('.daymode').toggleClass('selected');
    $('.nightmode').toggleClass('selected');
    $('body').css('color', '#f4f4f4');
    $('body').css('background-color', '#494949');
    }
    
});

$('.daymode').click(function(){
    if(!$('.daymode').hasClass('selected')){
    $('.daymode').toggleClass('selected');
    $('.nightmode').toggleClass('selected');
    $('body').css('color', 'black');
    $('body').css('background-color', 'white');
    }
});

setInterval(function(){
    $('.underline').css('opacity', '0');
    setTimeout(function(){
        $('.underline').css('opacity', '1')
    },500);
}, 1000);