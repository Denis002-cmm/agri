let lastScrollY = window.scrollY;
        const header = document.getElementById("header");

        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                header.classList.add("hidden");
            } else {
                // Scrolling up
                header.classList.remove("hidden");
            }
            lastScrollY = window.scrollY;
        });

// logo
document.addEventListener("DOMContentLoaded", function () {
  // Get the logo div by its ID
  const logo = document.getElementById("logo");

  // Check if the element exists
  if (logo) {
      // Add a click event listener
      logo.addEventListener("click", function () {
          // Redirect to index.html
          window.location.href = "../index.html";
      });

      // Change the cursor to indicate it's clickable
      logo.style.cursor = "pointer";
  }
});



document.addEventListener('DOMContentLoaded', () => {
    // Initialize intl-tel-input
    const phoneInputField = document.getElementById('phone');
    const phoneInput = window.intlTelInput(phoneInputField, {
      initialCountry: 'auto',
      geoIpLookup: (callback) => {
        fetch('https://ipinfo.io/json?token=demo') // Replace 'demo' with your IPInfo API token
          .then((resp) => resp.json())
          .then((data) => callback(data.country))
          .catch(() => callback('US'));
      },
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });

    // Form submission
    const form = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Validate phone number
      if (!phoneInput.isValidNumber()) {
        document.getElementById('error-message').textContent = 'Please enter a valid phone number.';
        return;
      }

      // Clear error message
      document.getElementById('error-message').textContent = '';

      // Gather form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: phoneInput.getNumber(),
        comment: document.getElementById('comment').value,
        access_key: '894ff7de-392b-4c72-8b9f-6eabdefbb3de', // Replace with actual access key
      };

      // Simulate an API call
      fetch('https://example.com/api/comments', { // Replace with your API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert('Comment submitted successfully!');
          
          // Add the new comment to the top of the comments section
          const newComment = document.createElement('div');
          newComment.classList.add('comment');
          newComment.innerHTML = `
            <div class="author">${formData.name}</div>
            <div class="date">${new Date().toLocaleDateString()}</div>
            <div class="text">${formData.comment}</div>
          `;
          commentsList.prepend(newComment);

          // Reset the form
          form.reset();
          phoneInputField.value = ''; // Reset phone input
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to submit comment. Please try again.');
        });
    });
  });


// enquiryForm
  
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  const phoneInput = document.getElementById("phone");
  const formStatus = document.createElement("p");
  formStatus.id = "formStatus";
  form.appendChild(formStatus);

  // Initialize intl-tel-input with auto country detection
  const iti = window.intlTelInput(phoneInput, {
      preferredCountries: ["us", "gb", "in", "ke", "ng"], // Preferred countries
      separateDialCode: true, // Show country dial code separately
      initialCountry: "auto", // Automatically detect user's country
      geoIpLookup: function(callback) {
          fetch("https://ipapi.co/json")
              .then((res) => res.json())
              .then((data) => callback(data.country_code))
              .catch(() => callback("us")); // Default to US if lookup fails
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });

  form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      // Get field values
      const name = document.getElementById("name").value.trim();
      const phone = iti.getNumber(); // Get full international number
      const email = document.getElementById("email").value.trim().toLowerCase();
      const service = document.getElementById("service").value;
      const comments = document.getElementById("comments").value.trim();

      // Validation
      if (!name || !phone || !email || service === "") {
          formStatus.textContent = "Please fill out all required fields.";
          formStatus.style.color = "red";
          return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          formStatus.textContent = "Please enter a valid email address.";
          formStatus.style.color = "red";
          return;
      }

      // Phone validation (Use intl-tel-input built-in validation)
      if (!iti.isValidNumber()) {
          formStatus.textContent = "Please enter a valid phone number.";
          formStatus.style.color = "red";
          return;
      }

      // Hide error message if validation passes
      formStatus.textContent = "";
      
      try {
          const response = await fetch(form.action, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  access_key: "894ff7de-392b-4c72-8b9f-6eabdefbb3de",
                  name,
                  email,
                  phone,
                  service,
                  comments,
              }),
          });

          if (response.ok) {
              alert("Your message has been sent successfully!");
              form.reset(); // Reset the form
              iti.setNumber(""); // Clear intl-tel-input field
          } else {
              alert("There was an error sending your message. Please try again later.");
          }
      } catch (error) {
          alert("There was an error sending your message. Please try again later.");
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Mapping of IDs to corresponding HTML pages
  const idToPageMap = {
      "forage-post": "ed1.html",
      "what-is-post": "ed2.html",
      "why-baled-post": "ed3.html",
      "crop-suitable-post": "ed4.html",
      "bale-usage-post": "ed5.html",
      "mailking-system-post": "ed6.html"
  };

  // Loop through each mapped ID and add a click event
  Object.keys(idToPageMap).forEach(id => {
      const post = document.getElementById(id);
      if (post) {
          post.addEventListener("click", function () {
              window.location.href = idToPageMap[id];
          });
          post.style.cursor = "pointer"; // Indicate it's clickable
      }
  });
});
