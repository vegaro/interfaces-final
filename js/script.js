

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
});