// script.js

// 1. Your existing IntersectionObserver & scroll logic:
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-animate]').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.15}s`;
  observer.observe(el);
});

// Logo shrink on scroll
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const logo = document.querySelector('.logo');
  logo.style.width = y > window.innerHeight - 100 ? '100px' : '140px';
});

// 2. New: Call button functionality
const callBtn = document.getElementById('call-btn');
if (callBtn) {
  const phoneNumber = '052-656-3779';

  callBtn.addEventListener('click', () => {
    // Copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          alert('המספר הועתק ללוח: ' + phoneNumber);
        })
        .catch(err => {
          console.error('שגיאה בהעתקה: ', err);
        });
    }
    // Open dialer (on mobile devices)
    window.location.href = 'tel:' + phoneNumber.replace(/-/g, '');
  });
}
