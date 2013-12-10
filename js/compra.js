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