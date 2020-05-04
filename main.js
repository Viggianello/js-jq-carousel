// intercetto il click sulla classe next
$('.next').click(function(click_next) {
    clock = setInterval(function() {

    // recupero l'img che ha la classe active in questo momento
    var img_corrente = $('img.active');
    // recuro il pallino che ha la classe active in questo momento
    var pallino_corrente = $('.fa-circle.active');
    // tolgo la classe active dall'img corrente
    img_corrente.removeClass('active');
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('active');
    // recupero l'immagine successiva
    var img_successiva = img_corrente.next('img');
    // recupero il pallino successiva
    var pallino_successivo =pallino_corrente.next('.fa-circle');
    // verifico che esista un img successivo
    if (img_successiva.length !=0) {
        // c'è una img successiva
        // metto la classe active all'immagine img_successiva
        img_successiva.addClass('active');
        // metto la classe active al pallino successivo
        pallino_successivo.addClass('active');
    } else {
        // non c'è una img succesiva => riparto dall'inizio
        img_successiva = $('img:first-child');
        img_successiva.addClass('active');
        // non c'è un pallino succesivo => riparto dal primo
        $('.fa-circle:first-child').addClass('active');
    }
}, 3000)});

// intercetto il click sulla classe prev
$('.prev').click(function(click_prev) {
    clock_reverse = setInterval(function() {
    // recupero l'img che ha la classe active in questo momento
    var img_corrente = $('img.active');
    // recupero il pallino che ha la classe active in questo momento
    var pallino_corrente = $('.fa-circle.active');
    // tolgo la classe active dall'img corrente
    img_corrente.removeClass('active');
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('active');
    // recupero l'immagine precedente
    var img_precedente = img_corrente.prev('img');
    // recupero il pallino precedente
    var pallino_precedente =pallino_corrente.prev('.fa-circle');
    // verifico che esista un img precedente
    if (img_precedente.length !=0) {
        // c'è una img precedente
        // metto la classe active all'immagine img_precedente
        img_precedente.addClass('active');
        // metto la classe active al pallino precedente
        pallino_precedente.addClass('active');
    } else {
        // non c'è una img precedente => riparto dalla fine
        img_precedente = $('img:last-of-type');
        img_precedente.addClass('active');
        // non c'è un pallino precedente => riparto dall'ultimo
        $('.fa-circle:last-child').addClass('active');
    }
    // if (.stop_prev.active) {
    //
    // }
}, 3000)});

// lavora sul pallino che cliccherò
$('.bullet .fa-circle').click(function() {
    // console.log($(this).index());
    // recupera l indice del pallino cliccato
    var indice_corrente = $(this).index();
    // seleziono l immagine futura basandomi sull indice del pallino perchè sono parallele n immagini = n pallini
    var elemento_corrente = $('.slide img').eq(indice_corrente);

    $('img.active').removeClass('active');
    elemento_corrente.addClass('active');

    $('.fa-circle.active').removeClass('active');
    $(this).addClass('active');

});
// creo un pulsante che faccia terminare il loop infinito delle immagini che scorrono sia se azionate con .next che con .prev
$('.play .stop_next').click(function() {
    clearInterval(clock);
    // clearInterval(clock_reverse);
    // $( ".next" ).off(click_next);
    // $( ".prev" ).off(click_prev);
});

$('.play .stop_prev').click(function() {
    // .addClass(active)
    // dare uno stato in maniera tale da verificare tale e poi metter clearinterval se ha questo stato
    clearInterval(clock_reverse);
});
// l'autoplay Slider, ossia che automaticamente ogni 3 secondi cambi slide e venga visualizzata l'immagine successiva.
// quando clicco sul >,ossia next, entra nel loop che mi manda avanti la foto ogni 3 secondi all'infinito
// quando clicco sul <,ossia prev, entra nel loop che mi manda indietro la foto ogni 3 secondi all'infinito
// se clicco due volte fa un salto e si impostano due loop
