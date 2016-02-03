
$("#submit-btn").click(function() {
  // alertify.alert("This is an alertify dialog.");
  alertify.confirm("This is a confirm dialog", function() {
  }, function() {

  });
  // alertify.error("Standard log message");
});
