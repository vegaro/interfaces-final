function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var entradas = parseInt(getUrlVars()["noentradas"]);
var precio = 8.9 * entradas;
$('#precio-total').text(precio.toFixed(2));