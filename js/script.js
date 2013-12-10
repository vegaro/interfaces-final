$( document ).ready( function() {
    if (localStorage.getItem('usuarioConectado')){
        // El usuario esta logeado
        $('#registro-login').toggle();
        $('#registro-logout').toggle();
        $('#usuario-conectado-nombre').text(
            localStorage.getItem(localStorage.getItem('usuarioConectado')+'-nombre'));
    }
});

$('#form-login').submit(function(e){
    // Si el usuario existe en la base de datos
    var usuario = $('#form-login [name="usuario"]').val();
    var pass = $('#form-login [name="pass"]').val();
    if (localStorage.getItem(usuario+'-pass') !== null){
        if (localStorage.getItem(usuario+'-pass') === pass){
            // Login
            localStorage.setItem('usuarioConectado', usuario);
            location.reload();
        }
    }else{
        alert("Este usuario no existe.");
    }
    event.preventDefault();
});

$('#registro-logout a').click(function(e){
    // Desconecta al usuario
    localStorage.removeItem('usuarioConectado');
    // Recarga la pagina
    location.reload();
});
