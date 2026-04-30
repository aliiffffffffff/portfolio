// =====================
// FILTER PORTFOLIO
// =====================
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards  = document.querySelectorAll('.work-card');
const worksGrid  = document.getElementById('worksGrid');

// Buat elemen "under construction" sekali saja
const underConstruction = document.createElement('div');
underConstruction.className = 'under-construction';
underConstruction.innerHTML = `
  <div class="uc-inner">
    <div class="uc-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    </div>
    <p class="uc-title">Still under construction</p>
    <p class="uc-sub">Graphic design works are being curated.<br>Check back soon.</p>
  </div>
`;
underConstruction.style.display = 'none';
worksGrid.parentElement.insertBefore(underConstruction, worksGrid.nextSibling);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Kalau graphic design → tampilkan under construction
    if (filter === 'graphic-design') {
      worksGrid.style.display = 'none';
      underConstruction.style.display = 'block';
      return;
    }

    // Selain itu → tampilkan grid normal
    worksGrid.style.display = 'grid';
    underConstruction.style.display = 'none';

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
