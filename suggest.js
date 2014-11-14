$(document).ready(function(){
	$("form").submit(function() {
		event.preventDefault();
		year = $("form input[name='year']").val();
		actors = $("form input[name='actors']").val();
		actor = actors.split(",");
		toReplace = /\s/g;
		for (i=0; i<actor.length; i++) {
			actor[i] = actor[i].replace(toReplace, "");
		}

		otherInformation = $("form input[name='other-information']").val();
		category = $("form select[name='category'] option:selected").val();

		$.ajax("movies.html")
		  .done(function(data) {
		  	$(".hidden").append($(data));
		  	/*custom = $("#3 h2");
		  	alert($(".hidden").find(custom).text());
		  	if ($(".hidden").find("#2").text() == "")
		  		alert("empty");
		  	*/
		  	var matched = new Array(), resultTitle, resultYear, resultActors, resultOtherInformation, resultCategory,
		  	outImage, outTitle, outYear, outSinpsis, outCategories, outActors, outTrailer;

		  	if (year == "" && actors == "" && otherInformation == "" && category == "") {
		  		do{
		  			match = Math.floor(Math.random()*7494+3);
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

		  		// call youtube API
		  	}
		  	else {
		  		for (i=3; i<7496; i++) {
		  			var count = 0;

		  			id = "#" + i;
		  			if ($(".hidden").find(id).text() != "") {
		  				
		  				if (otherInformation != "") {
		  					custom = id + " h2";
			  				if ($(".hidden").find(custom).text().indexOf(otherInformation) >	 -1)
			  					resultTitle = true;
			  				else
			  					resultTitle = false;
		  				}

	  					if (year != "") {
		  					custom = id + " span";
			  				if ($(".hidden").find(custom).text().indexOf(year) > -1)
			  					resultYear = true;
			  				else
			  					resultYear = false;
			  			}

	  					if (otherInformation != "") {
		  					custom = id + " .sinopsis";
			  				if ($(".hidden").find(custom).text().indexOf(otherInformation) > -1)
			  					resultOtherInformation = true;	
			  				else
			  					resultOtherInformation = false;
			  			}

	  					if (category != "") {
		  					custom = id + " .categories";
			  				if ($(".hidden").find(custom).text().indexOf(category) > -1)
			  					resultCategory = true;
			  				else
			  					resultCategory = false;
			  			}

	  					if (actors != "") {
		  					custom = id + " .actors";
			  				for (j=0; j<actor.length; j++)
			  					if ($(".hidden").find(custom).text().indexOf(actor[i]) > -1)
			  						count++;
			  				if (count == actor.length)
			  					resultActors = true;
			  				else
			  					resultActors = false;
			  			}

			  			if (((otherInformation == "" || resultTitle == true) || (otherInformation == "" || resultOtherInformation == true)) && (year == "" || resultYear == true) && (category == "" || resultCategory == true) && (actors == "" || resultActors == true)) {
			  				matched[matched.length] = id;
			  			}
		  			}
		  		}

		  		if (matched.length > 0) {
		  			match = Math.floor(Math.random()*matched.length);
		  			suggestionID = matched[match];
			  		custom = suggestionID + " img";
			  		outImage = $(".hidden").find(custom).attr("src");
			  		custom = suggestionID + " h2";
			  		outTitle = $(".hidden").find(custom).text();
			  		custom = suggestionID + " span";
			  		outYear = $(".hidden").find(custom).text();
			  		custom = suggestionID + " .sinopsis";
			  		outSinopsis = $(".hidden").find(custom).text();
			  		custom = suggestionID + " .categories";
			  		outCategories = $(".hidden").find(custom).text();
			  		custom = suggestionID + " .actors";
			  		outActors = $(".hidden").find(custom).text();

			  		// call youtube API
		  		}
		  		else {
		  			// No match
		  		}
		  	}
		  })
			.fail(function(jqXHR, textStatus, errorThrown) {
			  alert(textStatus);
			  alert(errorThrown);
			});
	});
})