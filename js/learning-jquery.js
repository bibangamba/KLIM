$( document ).ready(function() {

	$( "a" ).click(function( event ){
		alert("shouldn't work anymore..");
		event.preventDefault();
	});

});