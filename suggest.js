$(document).ready(function(){
	$("form").submit(function() {
		event.preventDefault();
		year = $("form input[name='year']").val();
		actors = $("form input[name='actors']").val();
		actor = actors.split(",");
		toReplace = /\s/g;
		for (i=0; i<actor.length; i++) {
			actor[i] = actor[i].replace(toReplace, "");
			alert(actor[i]);
		}

		otherInformation = $("form input[name='other-information']").val();
		category = $("form select[name='category'] option:selected").val();

		$.ajax("test.html")
		  .done(function(data) {
		  })
			.fail(function(jqXHR, textStatus, errorThrown) {
			  alert(textStatus);
			  alert(errorThrown);
			});
	});
})