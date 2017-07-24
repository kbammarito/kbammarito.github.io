// Contact Form Scripts

  $(document).ready(function(){
    $("#contactForm").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/dnomdcsa",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#contactForm").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
          // Show a success message here...
        },
        error: function(){
          console.log("Failure. Try again.");
          // Show an error message here...
        }
      });
    });
  });