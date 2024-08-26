$(document).ready(function () {
    $(".col-md-6")
      .css({ opacity: 0, marginTop: "-100px" })
      .animate({ opacity: 1, marginTop: "0px" }, 1200);
  
    $(window).on("scroll", function () {
      $(".col-md-6").each(function () {
        let elementTop = $(this).offset().top;
        let viewportBottom = $(window).scrollTop() + $(window).height();
  
        if (elementTop < viewportBottom) {
          $(this).animate({ opacity: 1, marginRight: "0px" }, 1200);
        }
      });
    });
  });
  
  // console.log("Hello World !!!")
  
  //  $(document).ready(function () {
  //    alert("jQuery is working!");
  //    $("h1").css("color", "green");
  //  });
  
  $(document).ready(function () {
    $("#testForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        mobile: {
          required: true,
          number: true,
          minlength: 8,
          maxlength: 10,
        },
        message: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Please enter your name*",
          minlength: "Your name must be at least 2 characters long",
        },
        email: {
          required: "Please enter your email*",
          email: "Please enter a valid email address",
        },
        mobile: {
          required: "Please enter your phone number*",
          number: "Please enter a valid phone number",
          minlength: "Your phone number must be at least 8 digits long",
          maxlength: "Your phone number must be at most 10 digits long",
        },
        message: {
          required: "Please enter your message*",
        },
      },
      submitHandler: function (form) {
        // Print form values to the console
        var name = $("#name").val();
        var email = $("#email").val();
        var number = $("#mobile").val();
        var message = $("#message").val();
  
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Phone Number: " + number);
        console.log("Message: " + message);
  
        // Optionally submit the form
        // form.submit();
      },
    });
  });
  