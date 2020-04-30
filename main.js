// intercetto il click sulla classe next
$('.next').click(function() {
    // recupero l'img che ha la classe active in questo momento
    var img_corrente = $('img.active');
    // tolgo la classe active dall'img corrente
    img_corrente.removeClass('active');
    // recupero l'immagine successiva
    var img_successiva = img_corrente.next('img');
    // verifico che esista un img successivo
    if (img_successiva.length !=0) {
        // c'è una img successiva
        // metto la classe active all'immagine img_successiva
        img_successiva.addClass('active');
    } else {
        // non c'è una img succesiva => riparto dall'inizio
        img_successiva = $('img:first-child');
        img_successiva.addClass('active');
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
        img_precedente = $('img:last-child');
        img_precedente.addClass('active');
    }
});
