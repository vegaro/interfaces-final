$('#form-registro').submit(function(e){
    // Si el usuario existe en la base de datos
    var usuario = $('#form-registro [name="usuario"]').val();
    if (localStorage.getItem(usuario+'-pass') !== null){
        alert("Este usuario ya existe.");
    }else{
        var pass = $('#form-registro [name="pass"]').val();
        var conf_pass = $('#form-registro [name="pass-conf"]').val();
        if (pass !== conf_pass){
            alert("Las contraseñas no coinciden.");
        }else{
            // Registrar al usuario
            localStorage.setItem(usuario+'-pass', $('#form-registro [name="pass"]').val());
            localStorage.setItem(usuario+'-nombre', $('#form-registro [name="nombre"]').val());
            // Logearlo
            localStorage.setItem('usuarioConectado', usuario);
            window.location ="registro.html";
        }
    }
    event.preventDefault();
});