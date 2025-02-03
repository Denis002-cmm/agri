
//monile
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar ul');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

new Swiper('.swiper', {
    loop: true, // Enables looping of slides
    spaceBetween: 30, // Space between slides
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true, // Enable dynamic bullet resizing
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 3, // Show 3 slides on very small screens
      },
      576: {
        slidesPerView: 3, // Show 3 slides on small screens
      },
      768: {
        slidesPerView: 2, // Show 2 slides on medium screens
      },
      1024: {
        slidesPerView: 3, // Show 3 slides on larger screens
      },
    },
  
    // Autoplay functionality
    autoplay: {
      delay: 4000, // Delay of 4 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
  });
  
// testmony
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-item");
    const dots = document.querySelectorAll(".dot");
  
    let currentIndex = 0;
  
    function updateTestimonials(newIndex) {
      // Remove the active class from the current testimonial
      testimonials[currentIndex].classList.remove("active");
      testimonials[currentIndex].classList.add("exit");
  
      // Add active class to the new testimonial
      setTimeout(() => {
        testimonials[currentIndex].classList.remove("exit");
      }, 800); // Wait for the slide-out animation to complete
  
      testimonials[newIndex].classList.add("active");
  
      // Update dots
      dots[currentIndex].classList.remove("active");
      dots[newIndex].classList.add("active");
  
      currentIndex = newIndex;
    }
  
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const newIndex = parseInt(dot.dataset.index);
        if (newIndex !== currentIndex) {
          updateTestimonials(newIndex);
        }
      });
    });
  
    setInterval(() => {
      const newIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonials(newIndex);
    }, 5000); // Auto-slide every 5 seconds
  });
  
  
  //contact form
// JavaScript Validation and Submission
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Form Fields
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate Fields
    if (name === "" || email === "" || phone === "" || message === "") {
          formStatus.textContent = "All fields are required.";
          formStatus.style.display = "block";
          return;
      }

      // Email Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          formStatus.textContent = "Please enter a valid email address.";
          formStatus.style.display = "block";
          return;
      }

    // Phone Validation (optional, you can define a regex for valid phone numbers)
    const phoneRegex = /^\+?[0-9]{10,15}$/; //
    if (!phoneRegex.test(phone)) {
          formStatus.textContent = "Please enter a valid phone number.";
          formStatus.style.display = "block";
          return;
      }

      // If validation passes, submit the form
      formStatus.style.display = "none";

    // Send form data using fetch (to Web3Forms API)
      fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              access_key: "894ff7de-392b-4c72-8b9f-6eabdefbb3de",
              name,
              email,
              phone,
              message,
          }),
      })
          .then((response) => {
              if (response.ok) {
                  alert("Your message has been sent successfully!");
                form.reset();// Reset the form
              } else {
                  alert("There was an error sending your message. Please try again later.");
              }
          })
          .catch(() => {
              alert("There was an error sending your message. Please try again later.");
          });
  });


// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 200,
    //reset: true // Change to false if you don't want animations to repeat
  });
  
  // Apply ScrollReveal animations to elements
  sr.reveal('.hero1 h1', { origin: 'top' });
  sr.reveal('.hero1 p', { origin: 'bottom', delay: 500 });
  sr.reveal('.btn', { origin: 'bottom', delay: 700 });
  
  sr.reveal('.featured-services h2', { origin: 'left' });
  sr.reveal('.service-item', { origin: 'bottom', interval: 200 });
  
  sr.reveal('.newpost h2', { origin: 'top' });
  sr.reveal('.project-card', { origin: 'right', interval: 200 });
  
  sr.reveal('.testimonials h2', { origin: 'left' });
  sr.reveal('.testimonial-box', { origin: 'right', delay: 500 });
  
  sr.reveal('.latest-news h2', { origin: 'bottom' });
  sr.reveal('.news-card', { origin: 'bottom', interval: 150 });

  sr.reveal('.helo-content h1', { origin: 'top',});
  
  sr.reveal('.contat h2', { origin: 'top' });
  sr.reveal('.contat p', { origin: 'bottom' });
  sr.reveal('.contat .circle-img', { origin: 'left' });
  sr.reveal('.cont-form h2', { origin: 'top' });
  sr.reveal('.cont-form p', { origin: 'bottom' });
  sr.reveal('.cont-form .circle-img', { origin: 'left' });
  sr.reveal('.form', { origin: 'right', delay: 500 });

  //abount us
  sr.reveal('.cont2 h1', { origin: 'top' });
  sr.reveal('.cont2 p', { origin: 'bottom'});

  sr.reveal('.about-us h1', { origin: 'top',});
  
  sr.reveal('about-us h2', { origin: 'top' });
  sr.reveal('.about-us p', { origin: 'bottom' });
  sr.reveal('.contat .circle-img', { origin: 'left' });
  sr.reveal('.cont-form h2', { origin: 'top' });
  sr.reveal('.cont-form p', { origin: 'bottom' });
  sr.reveal('.cont-form .circle-img', { origin: 'left' });
  sr.reveal('.form', { origin: 'right', delay: 500 });
  sr.reveal(".hero2 h2, .hero2 p", { origin: "top",delay: 500,});
  sr.reveal('.categories1', { origin: 'left' });
  sr.reveal('.product', { origin: 'bottom', delay: 500 });
  sr.reveal(".social-media1 > div", { origin: "top",delay: 500,});
  







// galley
function showTab(tabName) {
  document.getElementById('images').style.display = tabName === 'images' ? 'grid' : 'none';
  document.getElementById('videos').style.display = tabName === 'videos' ? 'block' : 'none';
  
  document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
}

// for-sale
document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-menu1 li a");
  const categoryContent = document.querySelector(".category-content1");

  categoryLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          
          // Remove active state from all links
          categoryLinks.forEach(link => link.classList.remove("active"));
          
          // Add active state to clicked link
          this.classList.add("active");
          
          // Update category content (placeholder functionality)
          const categoryName = this.textContent;
          categoryContent.innerHTML = `<div class='no-products'><i class='icon'>📄</i><p>No products available in ${categoryName}.</p></div>`;
      });
  });

  // Social Media Section Placeholder (future expansion)
  const twitterSection = document.querySelector(".twitter p");
  if (twitterSection.textContent.trim() === "Nothing to see here - yet") {
      twitterSection.style.opacity = "0.6";
  }
});




