// =====================
// LIGHTBOX VIDEO SYSTEM
// Support: YouTube, Google Drive, Instagram (redirect)
// =====================

const overlay  = document.getElementById('lightboxOverlay');
const iframeWrap = document.getElementById('lightboxIframeWrap');
const igCard   = document.getElementById('lightboxIg');
const igBtn    = document.getElementById('lightboxIgBtn');
const closeBtn = document.getElementById('lightboxClose');

// Buka lightbox
function openLightbox(type, src) {
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (type === 'youtube' || type === 'drive') {
    iframeWrap.style.display = 'block';
    igCard.style.display = 'none';
    iframeWrap.querySelector('iframe').src = src;
  }

  if (type === 'instagram') {
    iframeWrap.style.display = 'none';
    igCard.style.display = 'flex';
    igBtn.href = src;
  }
}

// Tutup lightbox
function closeLightbox() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  // Stop video
  const iframe = iframeWrap.querySelector('iframe');
  iframe.src = '';
}

// Tombol close
closeBtn.addEventListener('click', closeLightbox);

// Klik di luar box
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeLightbox();
});

// Tekan Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Attach ke semua kartu video
document.querySelectorAll('.work-card[data-video-type]').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const type = card.dataset.videoType;
    const src  = card.dataset.videoSrc;
    openLightbox(type, src);
  });
});
