
// Singers
$('.bt1').on('click', function () {
    $('.tx1').slideToggle(300);
    $('.tx2, .tx3 ,.tx4').hide(300);
});
$('.bt2').on('click', function () {
    $('.tx2').slideToggle(300);
    $('.tx1, .tx3 ,.tx4').hide(300);
});
$('.bt3').on('click', function () {
    $('.tx3').slideToggle(300);
    $('.tx2, .tx1 ,.tx4').hide(300);
});
$('.bt4').on('click', function () {
    $('.tx4').slideToggle(300);
    $('.tx2, .tx3 ,.tx1').hide(300);
});

// Scroller
$(document).on('scroll', function () {
    let documentScroll = $(document).scrollTop();
    let singersOffset = $('.singers').offset().top;
    if (documentScroll > singersOffset - 150) {
        $('.arr').css('right', '20px');
    } else {
        $('.arr').css('right', '-100px');
    }
})

$('.arrw').on('click', function () {
    $('body, html').animate({scrollTop:0}, 1000)
});

$('.menio').on('click', function () {
    $('.nav').slideToggle(300)
});
$('.theme').on('click', function () {
    $('.colorpecer').slideToggle(300)
});


    // to bick the color from color bicker
let color1 = document.getElementById('color1');
let color1b = getComputedStyle(color1).getPropertyValue('background-color');

let color2 = document.getElementById('color2');
let color2b = getComputedStyle(color2).getPropertyValue('background-color');

let color3 = document.getElementById('color3');
let color3b = getComputedStyle(color3).getPropertyValue('background-color');

let color4 = document.getElementById('color4');
let color4b = getComputedStyle(color4).getPropertyValue('background-color');

$('.color1').on('click', function () {
    $(':root').css('--theme', color1b);
});
$('.color2').on('click', function () {
    $(':root').css('--theme', color2b);
});
$('.color3').on('click', function () {
    $(':root').css('--theme', color3b);
});
$('.color4').on('click', function () {
    $(':root').css('--theme', color4b);
});


// date counter
let date = new Date("Mar 25, 2030 20:55:55").getTime();


var counter = setInterval(function () {

    let now = new Date().getTime();

    let left = date - now;

    document.getElementById('day').innerHTML = Math.floor(left / (1000 * 60 * 60 * 24)) + " d";
    document.getElementById('hour').innerHTML = Math.floor(left % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) + " h";
    document.getElementById('menet').innerHTML = Math.floor(left % (1000 * 60 * 60) / (1000 * 60)) + " m";
    document.getElementById('second').innerHTML = Math.floor(left % (1000 * 60) / (1000)) + " s";
    
    if (left <= 0) {
        clearInterval(counter);
        document.getElementById('day').innerHTML = "0";
        document.getElementById('hour').innerHTML = "0";
        document.getElementById('menet').innerHTML = "0";
        document.getElementById('second').innerHTML = "0";
    }


},1000)
