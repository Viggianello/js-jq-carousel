// intercetto il click sulla classe next
// creo una funzione per il click next che posso poi riusare per fare un setInterval ,ossia un loop, per mandare avanti le immagini
function click_next() {
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
        // c'è una img successiva dunque anche un pallino essendo associati
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
}
// intercetto veramente il click sulla classe next
$('.next').click(click_next);

// intercetto il click sulla classe prev
// creo una funzione per il click prev che posso poi riusare per fare un setInterval ,ossia un loop, per mandare indietro le immagini
function click_prev() {
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
        // c'è una img precedente dunque anche un pallino essendo associati
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
}
// intercetto veramente il click sulla classe prev
$('.prev').click(click_prev);

// creo il loop delle immagini in avanti
function clock() {
    clock = setInterval(click_next, 3000);
    // disabilito il pulsante così non posso aggiungere altri loop
    $(this).prop("disabled",true);
}

// creo il loop delle immagini indietro
function clock_reverse() {
    clock_reverse = setInterval(click_prev, 3000);
    // disabilito il pulsante così non posso aggiungere altri loop
    $(this).prop("disabled",true);
}
// uso delle variabili globali in maniera tale da poterle richiamare per creare dei pulsanti che fermerebbero tali loop

// creo un tasto play, per far partire il loop in avanti, e un tasto play_reverce, per far partire il loop indietro, a cui metto le funzioni per creare i loop associati
$('.bottoni .play').click(clock);
$('.bottoni .play_reverce').click(clock_reverse);

// lavoro sul pallino che cliccherò
$('.bullet .fa-circle').click(function() {
    // recupera l'indice del pallino cliccato, ossia questo= this avendoci cliccato da azione soprastante, usando la funzione index
    var indice_corrente = $(this).index();
    // seleziono l'immagine futura basandomi sull'indice del pallino, perchè sono parallele, numero immagini = numero pallini, usando la funzione .eq() che 'Reduce the set of matched elements to the one at the specified index'.
    var elemento_corrente = $('.slide img').eq(indice_corrente);
// rimuovo la classe che rende visibile l'immagine a schermo per darla all'immagine futura ossia quella associata al pallino che ho cliccato
    $('img.active').removeClass('active');
    elemento_corrente.addClass('active');
// rimuovo la classe che rende visibile il pallino in bianco a schermo per darla al pallino che ho cliccato
    $('.fa-circle.active').removeClass('active');
    $(this).addClass('active');

});
// creo due pulsanti che facciano terminare i loop infiniti delle immagini che scorrono sia se azionate con .play,in primis, che con .play_reverce,in secondo.
$('.bottoni .stop_next').click(function() {
    clearInterval(clock);
    $('.play').prop("disabled",false);
});

$('.bottoni .stop_prev').click(function() {
    clearInterval(clock_reverse);
    $('.play_reverce').prop("disabled",false);
});
// Consegna esercizio: l'autoplay Slider, ossia che automaticamente ogni 3 secondi cambi slide e venga visualizzata l'immagine successiva.
// quando clicco sul play > entra nel loop che mi manda avanti la foto ogni 3 secondi all'infinito a patto che non clicco su stop > per fermare il tutto.
// quando clicco sul play revenrce < entra nel loop che mi manda indietro la foto ogni 3 secondi all'infinito a patto che non clicco su stop < per fermare il tutto.
// PROBLEMA: se clicco due o più volte sul pulsante play > o play_reverce < fa uno più salti e si impostano tanti loop pari ai click che faccio, dunque per blocccarlo non riesco più; l'unica cosa posso fare e levare un loop cliccando sul pulsante di stop associato, perchè il multi-click su tale pulsante non funziona. Soluzione inserire $(this).prop("disabled",true); in maniera tale che appena clicco per far partire il loop poi non posso pui aggiungere altri loop avendo disabilitato il pulsante
