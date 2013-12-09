$('form').submit(function(e) {
    var autor = $('#nombreForm').val();
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