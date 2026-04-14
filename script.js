// =====================
// FILTER PORTFOLIO
// =====================
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards  = document.querySelectorAll('.work-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    workCards.forEach((card, i) => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
      if (match) {
        card.style.animationDelay = (i * 0.05) + 's';
        card.style.animation = 'none';
        requestAnimationFrame(() => {
          card.style.animation = '';
        });
      }
    });
  });
});

// =====================
// NAVBAR MOBILE TOGGLE
// =====================
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// =====================
// NAVBAR SCROLL SHADOW
// =====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.borderBottomColor = '#d4d4d0';
  } else {
    navbar.style.borderBottomColor = '#e8e8e5';
  }
}, { passive: true });
