$( document ).ready( function() {
    var container = document.querySelector('.packery');
    var pckry = new Packery( container );

    eventie.bind( container, 'click', function() {
        // don't proceed if item was not clicked on
        var target = event.target;
        if ( !classie.has( target, 'item' ) ) {
            return;
        }
        var isGigante = classie.has( target, 'gigante' );
        classie.toggleClass( target, 'gigante' );
        $(target).children().toggle();
        if ( isGigante ) {
            // if shrinking, just layout
            pckry.layout();
        } else {
            // if expanding, fit it
            pckry.fit( target );
        }
    });

    if ($.cookie('usuario')){
        // El usuario esta logeado
        $('#registro-login').hide();
    }

});
$('form').submit(function(e) {
    var autor = $('#nombreForm').val();val()
    var comentario = $('#comentarioForm').val();

    // Generar el codigo html del nuevo elemento
    var html =  $('<li class="row"> \
                    <figure class="col-md-1"> \
                        <img src="images/avatares/desconocido.jpg" title="Desconocido" alt="Desconocido" class="img-circle"/> \
                    </figure> \
                    <blockquote class="col-md-10"> \
                        <p>' + comentario + '</p> \
                        <small><cite title="' + autor + '">' + autor + '</cite></small> \
                    </blockquote> \
                </li>').hide();
    $('#comentarios_lista').append(html);
    html.fadeIn("slow");
    
    // Reiniciar los valores de los input
    $('form').each (function(){
        this.reset();
    });

    event.preventDefault();
});
