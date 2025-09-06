const feedbackForm = document.getElementById("feedbackForm");
  const thankYouAlert = document.getElementById("thankYouAlert");

  feedbackForm.addEventListener("submit", async function(event) {
    event.preventDefault(); // Stop default reload

    const response = await fetch(feedbackForm.action, {
      method: feedbackForm.method,
      body: new FormData(feedbackForm),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      feedbackForm.reset(); // Clear form
      thankYouAlert.style.display = "block"; // Show alert

      // Auto-hide after 1 seconds
      setTimeout(() => {
        thankYouAlert.style.display = "none";
      }, 1000);
    }
  });

  //contact form 
   const contactForm = document.getElementById("contactForm");
  const contactAlert = document.getElementById("contactAlert");

  contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      contactForm.reset();
      contactAlert.style.display = "block";

      setTimeout(() => {
        contactAlert.style.display = "none";
        const modalEl = document.getElementById('contactModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide(); // auto-close modal
      }, 1000);
    }
  });