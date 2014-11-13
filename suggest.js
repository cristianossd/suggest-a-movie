$(document).ready(function(){
	$("form").submit(function() {
		event.preventDefault();
		$.ajax("test.html")
		  .done(function(data) {
		    alert(data);
		  })
			.fail(function(jqXHR, textStatus, errorThrown) {
			  alert(textStatus);
			  alert(errorThrown);
			});
	});
})