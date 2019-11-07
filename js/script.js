document.getElementById('quizmodal').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});


//SMOOTH SCROLL//
$('#aboutbtn').on('click', function() {
    const quizmodal = $('#aboutbtn').position().top;

    $('html, body').animate({
        scrollTop: quizmodal
    }, 900);
})
