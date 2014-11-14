$(document).ready(function(){
	$("form").submit(function(event) {
		event.preventDefault();

		var estado = $("#user-request").css("display");
		$("#loading").css("display", "table");

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
		  	outImage, outTitle, outYear, outSinopsis, outCategories, outActors, outTrailer;

		  	if (year == "" && actors == "" && otherInformation == "" && category == "") {
		  		do{
		  			match = Math.floor(Math.random()*7494+3);
		  			id = "#" + match;
		  		} while ($(".hidden").find(id).text() == "");

			  		custom = id + " img";
			  		outImage = $(".hidden").find(custom).attr("src");
			  		$("#movie_image img").attr("src", outImage);

			  		custom = id + " h2";
			  		outTitle = $(".hidden").find(custom).html();
			  		$("#movie_title").empty();
			  		$("#movie_title").append(outTitle);

			  		custom = id + " span";
			  		outYear = $(".hidden").find(custom).html();
			  		$("#movie_year").empty();
			  		$("#movie_year").append(outYear);

			  		custom = id + " .sinopsis";
			  		outSinopsis = $(".hidden").find(custom).html();
			  		$("#movie_sinopsis").empty();
			  		$("#movie_sinopsis").append("Sinopse: <br />");
			  		$("#movie_sinopsis").append(outSinopsis);

			  		custom = id + " .categories";
			  		outCategories = $(".hidden").find(custom).html();
			  		$("#movie_category").empty();
			  		$("#movie_category").append("Categoria: <br />");
			  		$("#movie_category").append(outCategories);

			  		custom = id + " .actors";
			  		outActors = $(".hidden").find(custom).html();
			  		$(".movie_actors").empty();
			  		$(".movie_actors").append("Atores: ");
			  		$(".movie_actors").append(outActors);

			  		YTsearch(outTitle);

			  		if (estado === "table")
			  			resultadoBusca(false);

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
			  		$("#movie_image img").attr("src", outImage);

			  		custom = suggestionID + " h2";
			  		outTitle = $(".hidden").find(custom).html();
			  		$("#movie_title").empty();
			  		$("#movie_title").append(outTitle);

			  		custom = suggestionID + " span";
			  		outYear = $(".hidden").find(custom).html();
			  		$("#movie_year").empty();
			  		$("#movie_year").append(outYear);

			  		custom = suggestionID + " .sinopsis";
			  		outSinopsis = $(".hidden").find(custom).html();
			  		$("#movie_sinopsis").empty();
			  		$("#movie_sinopsis").append("Sinopse: <br />");
			  		$("#movie_sinopsis").append(outSinopsis);

			  		custom = suggestionID + " .categories";
			  		outCategories = $(".hidden").find(custom).html();
			  		$("#movie_category").empty();
			  		$("#movie_category").append("Categoria: <br />");
			  		$("#movie_category").append(outCategories);

			  		custom = suggestionID + " .actors";
			  		outActors = $(".hidden").find(custom).html();
			  		$(".movie_actors").empty();
			  		$(".movie_actors").append("Atores: ");
			  		$(".movie_actors").append(outActors);


					YTsearch(outTitle);

			  		if (estado === "table")
			  			resultadoBusca(false);

			  		// call youtube API


		  		}
		  		else {
		  			// No match
		  			if (estado === "table")
		  				resultadoBusca(true);
		  			else{
		  				$("#suggestion").slideToggle("fast");
		  				$("#error").slideToggle("fast");
		  			}

		  		}
		  	}
		  	$("#loading").css("display", "none");
		  })
			.fail(function(jqXHR, textStatus, errorThrown) {
			  alert(textStatus);
			  alert(errorThrown);
			});
	});
});


function init() {
  gapi.client.load('youtube', 'v3');
}

function YTsearch(q) {
  var request = gapi.client.youtube.search.list({
    q: q + " trailer",
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    alert(str);
  });
}
