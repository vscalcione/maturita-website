$(document).ready(function(e){
    let $win = $(window);
    let $navbar = $('#header');
    let $toggle = $('.toggle-button');
    let width = $navbar.width();
    toggleOnClick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggleOnClick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

});

function toggleOnClick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

let typedPhrase = new Typed('#typed' , {
    strings: [
        'Junior Fullstack Developer (Backend - Frontend)',
        'Informatic Lover'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

let typed2ndPhrase = new Typed('#typed_2' , {
    strings: [
        'Junior Fullstack Developer (Backend - Frontend)',
        'Informatic Lover'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
