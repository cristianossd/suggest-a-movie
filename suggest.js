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
		  	$(".hidden").append($(data));
		  	//custom = $("#3 h2");
		  	//alert($(".hidden").find(custom).text());
		  	/*if ($(".hidden").find("#2").text() == "")
		  		alert("empty");
		  	*/
		  	var matched, resultYear, resultActors, resultOtherInformation, resultCategory,
		  	outImage, outTitle, outYear, outSinpsis, outCategories, outActors, outTrailer;

		  	if (year == "" && actors == "" && otherInformation == "" && category == "") {
		  		do{
		  			match = Math.floor(Math.random()*2+3);
		  			id = "#" + match;
		  		} while ($(".hidden").find(id).text() == "");

		  		custom = id + " img";
		  		outImage = $(".hidden").find(custom).attr("src");
		  		custom = id + " h2";
		  		outTitle = $(".hidden").find(custom).text();
		  		custom = id + " span";
		  		outYear = $(".hidden").find(custom).text();
		  		custom = id + " .sinopsis";
		  		outSinopsis = $(".hidden").find(custom).text();
		  		custom = id + " .categories";
		  		outCategories = $(".hidden").find(custom).text();
		  		custom = id + " .actors";
		  		outActors = $(".hidden").find(custom).text();
		  	}
		  	else {
		  		
		  	}
		  })
			.fail(function(jqXHR, textStatus, errorThrown) {
			  alert(textStatus);
			  alert(errorThrown);
			});
	});
})