$( document ).ready( function() {
    var usuario = localStorage.getItem('usuarioConectado');
    // Rellenar el nombre y el apellido por defecto del usuario conectado
    var nombre_y_apellidos = localStorage.getItem(usuario+'-nombre');
    if (localStorage.getItem(usuario+'-apellido') !== null){
        nombre_y_apellidos += ' ' + localStorage.getItem(usuario+'-apellido');
    }
    $('#comentarios #nombreForm').val(nombre_y_apellidos);
});


$('#comentarios form').submit(function(e) {
    var autor = $('#comentarios #nombreForm').val();
    var comentario = $('#comentarios #comentarioForm').val();

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