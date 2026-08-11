/* tallerDQS — shared: nav, reveal-on-scroll, image slots, contact form */

function imgSlotHTML({ src, label, mono }) {
  const cls = mono ? 'img-slot img-slot--mono' : 'img-slot';
  return (
    `<div class="${cls}">` +
      `<img src="${src}" alt="${label}" loading="lazy" onerror="this.style.display='none'">` +
      `<span class="img-slot__label">${label}</span>` +
    `</div>`
  );
}

function initNavSmoothScroll() {
  const onIndex = document.body.dataset.page === 'home';
  document.querySelectorAll('a[data-scroll-to]').forEach(link => {
    link.addEventListener('click', (e) => {
      if (!onIndex) return;
      const id = link.dataset.scrollTo;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
}

function initReveal() {
  const sections = document.querySelectorAll('[data-reveal]');
  if (!sections.length) return;
  if (!('IntersectionObserver' in window)) {
    sections.forEach(el => el.classList.add('is-revealed'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -18% 0px', threshold: 0 });
  sections.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const note = document.getElementById('contact-form-note');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!name || !(phone || email)) {
      note.textContent = 'Indica tu nombre y un teléfono o correo de contacto.';
      return;
    }
    const body = 'Nombre: ' + name + '\nTeléfono: ' + phone + '\nCorreo: ' + email + '\n\nMensaje:\n' + message;
    const url = 'mailto:tallerdqs@gmail.com?subject=' + encodeURIComponent('Contacto web — ' + name) + '&body=' + encodeURIComponent(body);
    window.location.href = url;
    note.textContent = 'Abriendo tu correo… si no abre, escríbenos a tallerdqs@gmail.com';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavSmoothScroll();
  initReveal();
  initContactForm();
});
