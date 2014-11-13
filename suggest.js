$(document).ready(function(){
	$("form").submit(function() {
		$.ajax("test.html")
		  .done(function() {
		    alert( "success" );
		  })
			.fail(function(jqXHR, textStatus, errorThrown) {
			  alert(textStatus);
			  alert(errorThrown);
			})
		  .always(function() {
		    alert( "complete" );
		  });
	});
})