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
      var payload = {
        first_name: $("#name").val().split(" ")[0] || "",
        last_name: $("#name").val().split(" ")[1] || "",
        email: $("#email").val(),
        company_id: 2,
        company: "ECSCloudInfotech",
        lead_status: "PENDING",
        description_info: $("#message").val(),
        phone: $("#phone").val(),
      };

      $.ajax({
        url: "https://crmlah.com/ecscrm/api/newClient",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(payload),
        success: function (response) {
          $("#successModal").modal("show");
          $(form).trigger("reset");
        },
        error: function (xhr, status, error) {
          $("#errorModal").modal("show");
          $(form).trigger("reset");
        },
      });
    },
  });
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
