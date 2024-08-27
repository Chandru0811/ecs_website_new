// navBar
document.addEventListener('DOMContentLoaded', function() {
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offcanvasInstance = new bootstrap.Offcanvas(offcanvasNavbar);

    // Toggle the offcanvas menu when the navbar toggler is clicked
    navbarToggler.addEventListener('click', function() {
        offcanvasInstance.toggle();
    });

    // Ensure correct display of the navbar links on window resize
    function handleResize() {
        const screenWidth = window.innerWidth;
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (screenWidth > 881) { // Larger screens than 881px
            offcanvasInstance.hide(); // Hide offcanvas if visible
            navbarCollapse.classList.add('show');
        } else { // 881px and smaller screens
            navbarCollapse.classList.remove('show');
        }
    }

    // Initial check
    handleResize();

    // Check on window resize
    window.addEventListener('resize', handleResize);
});

// Home
const videoImg = document.getElementById('videoImg');
const videoIframe = document.getElementById('videoIframe');

function handlePlayVideo() {
  videoImg.style.display = 'none';
  videoIframe.style.display = 'block';
}


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




//   Leadmagnet 
function showLeadMagnetModal() {
    $('#leadMagnetModal').modal('show');
}

// Function to handle form submission
function submitLeadMagnet() {
    var email = document.getElementById('leadMagnetEmail').value;
    if (email) {
        alert('Thank you for submitting your email!');
        $('#leadMagnetModal').modal('hide');
    } else {
        alert('Please enter a valid email address.');
    }
}

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
