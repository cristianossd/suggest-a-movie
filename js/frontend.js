var achou = true;

$(document).ready(function(){
  	$(".toggle-section").click(function(){
  		if (achou){
	    	$("#user-request").slideToggle("fast");
	    	$("#user-request .row").slideToggle("fast");
	    	$("#suggestion").slideToggle("fast");
	    }
	    else{
	    	$("#user-request").slideToggle("fast");
	    	$("#user-request .row").slideToggle("fast");
	    	$("#error").slideToggle("fast");
	    }
  	});
});

function addTrailer(video_id){
	var video_frame="<iframe width='100%' height='200' src='http://www.youtube.com/embed/"+video_id+"' frameborder='0' allowfullscreen></iframe>";
	document.getElementById("movie_trailer").innerHTML =  "<p>Trailer:</p>" + video_frame;
}