// script.js
// ================================================
// 1. Fade-in כשאלמנטים נכנסים לוויו
// ================================================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll('[data-animate]').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.15}s`;
  observer.observe(el);
});

// ================================================
// 2. שינוי גודל הלוגו בגלילה (קוסמטי)
// ================================================
window.addEventListener('scroll', () => {
  const logo = document.querySelector('.logo');
  if (!logo) return;
  logo.style.width = window.scrollY > 120 ? '100px' : '140px';
});

// ================================================
// 3. כפתור הטלפון – העתקה וחיוג
// ================================================
const callBtn = document.getElementById('call-btn');
if (callBtn) {
  const phoneNumber = '052-656-3779';

  callBtn.addEventListener('click', () => {
    /* העתק ללוח */
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => alert(`📋 המספר הועתק: ${phoneNumber}`))
        .catch(() => {});
    }
    /* פתיחת חיוג (במובייל) */
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
  });
}
