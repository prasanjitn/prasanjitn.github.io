// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Newsletter form validation
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('newsletter-name').value.trim();
  const email = document.getElementById('newsletter-email').value.trim();
  const error = document.getElementById('newsletter-error');
  error.textContent = '';
  if (!name) {
    error.textContent = 'Please enter your name.';
    return;
  }
  if (!validateEmail(email)) {
    error.textContent = 'Please enter a valid email address.';
    return;
  }
  error.textContent = 'Thank you for subscribing!';
  this.reset();
});

// Subscribe strip form validation
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('subscribe-email').value.trim();
  const error = document.getElementById('subscribe-error');
  error.textContent = '';
  if (!validateEmail(email)) {
    error.textContent = 'Please enter a valid email address.';
    return;
  }
  error.textContent = 'Thank you for subscribing!';
  this.reset();
});

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
