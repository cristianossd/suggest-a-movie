$(document).ready(function(){
  	$(".toggle-section").click(function(){
    	$("#user-request").slideToggle("fast");
    	$("#user-request .row").slideToggle("fast");
    	$("#suggestion").slideToggle("fast");
  	});
});