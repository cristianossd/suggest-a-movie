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