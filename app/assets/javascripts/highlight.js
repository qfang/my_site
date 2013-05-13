$("#highlight_more_btn").click(function() {
  $("#highlight_minimum_view").fadeOut(500, "linear");
  $("#highlight_more_btn").fadeOut(500, "linear"); 

  $("#highlight_dtl").slideDown("slow");


});


$("#highlight_close_btn").click(function(){
  $("#highlight_dtl").slideUp("slow");

  $("#highlight_minimum_view").fadeIn(500, "linear");
  $("#highlight_more_btn").fadeIn(500, "linear"); 


});