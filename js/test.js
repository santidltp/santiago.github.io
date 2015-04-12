 $(document).ready(function(){
    $("#send").click(function(e){ 
    	e.preventDefault();
  	     var name = $('input#name').val();
            var email = $('input#email').val();
            var message = $('textarea#message').val();
            
            $.ajax({
                url: "/time",
                type: "POST",
                dataType: 'text',
                contentType: "application/json",
 				 data: JSON.stringify({
		            name: name,
		            email: email,
		            message: message
    			}),
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                        	window.alert("my mom");
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                    window.alert("yourmom");
                }
            })

    }); 

  }); 