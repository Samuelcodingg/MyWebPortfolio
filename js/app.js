const links = document.querySelectorAll('a');

document.addEventListener('DOMContentLoaded', ()=> {

    //initLinks
    initLinks();

    //linkscroll
    linksScroll();

    //showAnimations
    showScrollAnimations();
})

function initLinks() {
    links.forEach((link)=>{
        link.target = '_blank';
    })
}

function linksScroll() {
    $('#moveToAboutMe').click(function(e){
        e.preventDefault();
        var codigo = "#" + $(this).data("scroll");
        $("html,body").animate({scrollTop: $(codigo).offset().top='0px'},0);
    });
    
    $('#moveToProjects').click(function(e){
        e.preventDefault();
        var codigo = "#" + $(this).data("scroll");
        $("html,body").animate({scrollTop: $(codigo).offset().top='520px'},0);
    });

    $('#moveToTech').click(function(e){
        e.preventDefault();
        var codigo = "#" + $(this).data("scroll");
        $("html,body").animate({scrollTop: $(codigo).offset().top='1780px'},0);
    });

    $('#moveToCV').click(function(e){
        e.preventDefault();
        var codigo = "#" + $(this).data("scroll");
        $("html,body").animate({scrollTop: $(codigo).offset().top='2320px'},0);
    });

    $('#moveToContact').click(function(e){
        e.preventDefault();
        var codigo = "#" + $(this).data("scroll");
        $("html,body").animate({scrollTop: $(codigo).offset().top='4800px'},0);
    });
}

function showScrollAnimations() {
    window.sr = ScrollReveal();
    sr.reveal('#top',{
        duration: 3000
    });

    sr.reveal('.introduction',{
        duration: 3000
    });

    sr.reveal('#projects', {
        duration: 3000,
        origin: 'right',
        distance: '-250px'
    });

    sr.reveal('#tech', {
        duration: 4000,
        origin: 'right',
        distance: '-250px'
    });

    sr.reveal('#cv', {
        duration: 3000
    });

    sr.reveal('#contact', {
        duration: 4000,
        origin: 'right',
        distance: '-250px'
    });
}