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

var dictPeli = {
  "1" : "El Lado Bueno de las Cosas",
  "2" : "El Mayordomo",
  "3" : "Cuestion de Tiempo",
  "4" : "Prisioneros",
  "5" : "Las Brujas de Zugarramurdi"
};

var dictCine = {
  "1" : "Cinesa Heron City",
  "2" : "Cinesa Proyecciones",
  "3" : "Cines Principe Pio",
  "4" : "Cine Roxy A",
};


var peli = getUrlVars()["peli"];
var sesion = getUrlVars()["sesion"];
var fecha = getUrlVars()["fecha"];
var noentradas = getUrlVars()["noentradas"];
var cine = getUrlVars()["cine"];
$('#peli').val(peli);
$('#sesion').val(sesion);
$('#fecha').val(fecha);
$('#noentradas').val(noentradas);
$('#cine').val(cine);


$('#pelicula').text(dictPeli[peli]);
$('#cine-campo').text(dictCine[cine]);
$('#sesion-campo').text(decodeURIComponent(sesion));
$('#fecha-campo').text(decodeURIComponent(fecha));