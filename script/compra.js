var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

$('.datepicker').datepicker({
    onRender: function(date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
});

$('select#noentradas').on('change',function(){
    $('#precio-total').text((parseFloat($('#precio').html())*this.value).toFixed(2));
});

$('select#fila').on('change',function(){
    $('#butacas').show();
    if(parseInt(this.value)%3==0){
        var asientosDes=$('#asiento').children('option');
        asientosDes.prop('disabled', false);
        asientosDes.eq(0).prop('disabled', true);
        asientosDes.eq(1).prop('disabled', true);
        asientosDes.eq(3).prop('disabled', true);
        asientosDes.eq(6).prop('disabled', true);
    }else if(parseInt(this.value)%3==1){
        var asientosDes=$('#asiento').children('option');
        asientosDes.prop('disabled', false);
        asientosDes.eq(0).prop('disabled', true);
        asientosDes.eq(5).prop('disabled', true);
        asientosDes.eq(6).prop('disabled', true);
        asientosDes.eq(7).prop('disabled', true);
    }else{
        var asientosDes=$('#asiento').children('option');
        asientosDes.prop('disabled', false);
        asientosDes.eq(0).prop('disabled', true);
        asientosDes.eq(1).prop('disabled', true);
        asientosDes.eq(2).prop('disabled', true);
        asientosDes.eq(3).prop('disabled', true);
        asientosDes.eq(4).prop('disabled', true);
    }

});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var dictPeli = {
  "1" : "El Lado Bueno de las Cosas",
  "2" : "El Mayordomo",
  "3" : "Cuestion de Tiempo",
  "4" : "Prisioneros",
  "5" : "Las Brujas de Zugarramurdi"
};


var peli = getUrlVars()["peli"];
$('#peli').val(peli);

$('#pelicula').text(dictPeli[peli]);