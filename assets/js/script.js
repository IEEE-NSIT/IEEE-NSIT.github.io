var vid = document.querySelector('#home-bg-video');
vid.playbackRate = 2;

$(function(){
    $('#sponsors-list').owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoPlayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ]
    })
});