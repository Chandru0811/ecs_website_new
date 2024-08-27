$(document).ready(function () {
  $(".col-md-6")
    .css({ opacity: 0, marginTop: "-100px" })
    .animate({ opacity: 1, marginTop: "0px" }, 1200);

  $(window).on("scroll", function () {
    $(".col-md-6").each(function () {
      let elementTop = $(this).offset().top;
      let viewportBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < viewportBottom) {
        $(this).animate({ opacity: 1, marginLeft: "0px" }, 1200);
      }
    });
  });

  $("#contactForm").validate({
    rules: {
      first_name: {
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
      description_info: {
        required: true,
      },
    },
    messages: {
      first_name: {
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
      description_info: {
        required: "Please enter your message*",
      },
    },
    submitHandler: function (form) {
      // Print form values to the console
      var first_name = $("#first_name").val();
      var email = $("#email").val();
      var number = $("#mobile").val();
      var description_info = $("#description_info").val();
      // showSuccessModal()
      console.log("Name: " + first_name);
      console.log("Phone Number: " + number);
      console.log("Email: " + email);
      console.log("Description: " + description_info);

      // Optionally submit the form
      // form.submit();
    },
  });
});

function showErrorModal() {
  $("#errorModal").modal("show");
}
function closePopup() {
  $("#errorModal").modal("hide");
}
//   document.addEventListener("click", function () {
//     showErrorModal(false);
//   });

function showSuccessModal() {
  $("#successModal").modal("show");
}

function closePopup() {
  $("#successModal").modal("hide");
}
