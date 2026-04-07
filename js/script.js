// Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });

  // Nav color change on scroll
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.8) {
      nav.classList.remove('dark');
      nav.classList.add('light-nav');
      nav.style.background = 'rgba(242,240,236,0.95)';
      nav.style.backdropFilter = 'blur(10px)';
    } else {
      nav.classList.add('dark');
      nav.classList.remove('light-nav');
      nav.style.background = 'var(--black)';
      nav.style.backdropFilter = 'none';
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // Modal
  function openModal() {
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Testimonials
  let tIdx = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  function changeTestimonial(dir) {
    testimonials[tIdx].classList.remove('active');
    tIdx = (tIdx + dir + testimonials.length) % testimonials.length;
    testimonials[tIdx].classList.add('active');
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // About Gallery Scroll
  function scrollGallery(dir) {
    const gallery = document.getElementById('aboutGallery');
    if(gallery) {
      const scrollAmount = gallery.clientWidth / 2;
      gallery.scrollBy({ left: scrollAmount * dir, behavior: 'smooth' });
    }
  }