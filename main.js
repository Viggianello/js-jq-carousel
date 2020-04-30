// intercetto il click sulla classe next
$('.next').click(function() {
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
});


// intercetto il click sulla classe prev
$('.prev').click(function() {
    // recupero l'img che ha la classe active in questo momento
    var img_corrente = $('img.active');
    // tolgo la classe active dall'img corrente
    img_corrente.removeClass('active');
    // recupero l'immagine precedente
    var img_precedente = img_corrente.prev('img');
    // verifico che esista un img precedente
    if (img_precedente.length !=0) {
        // c'è una img precedente
        // metto la classe active all'immagine img_precedente
        img_precedente.addClass('active');
    } else {
        // non c'è una img precedente => riparto dalla fine
        img_precedente = $('img:last-of-type');
        img_precedente.addClass('active');
    }
});
