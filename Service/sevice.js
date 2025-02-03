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



