$("#highlight_more_btn").click(function() {
  $("#highlight_minimum_view").hide();
  $("#highlight_more_btn").hide(); 
  $("#highlight_dtl_header").show();
  $("#highlight_dtl").slideDown("slow");
});


$("#highlight_close_btn").click(function(){
	$("#highlight_dtl_header").hide();
	$("#project_details").slideUp("slow");	
	$("#highlight_dtl").slideUp("slow");
	$("#close_project").hide();
  	$("#project_dtl_btn").show();	
    $("#highlight_minimum_view").fadeIn(500, "linear");
  	$("#highlight_more_btn").fadeIn(800, "linear");

});

$("#project_dtl_btn").click(function(){

  	$("#project_dtl_btn").hide();
	$("#close_project").show();
  	$("#project_details").slideDown("slow");

});

$("#project_close_btn").click(function(){
	$("#close_project").hide();
  	$("#project_dtl_btn").show();
  	$("#project_details").slideUp("slow");

});

