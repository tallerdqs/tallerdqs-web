/* tallerDQS — single project detail page */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const all = getSortedProjects();
  const current = getProjectById(params.get('id')) || all[0];
  const next = getNextProject(current.id);

  document.title = current.name + ' — tallerDQS';

  document.getElementById('detail-kicker').textContent = `${current.num} / ${current.type}`;
  document.getElementById('detail-title').textContent = current.name;
  document.getElementById('detail-meta').innerHTML = `${current.location}<br>${current.year}`;

  document.getElementById('detail-tagline').textContent = current.tagline;
  document.getElementById('detail-desc-1').textContent = current.longDesc;
  document.getElementById('detail-desc-2').textContent = current.longDesc2;
  [['detail-desc-3', 'longDesc3'], ['detail-desc-4', 'longDesc4'], ['detail-desc-5', 'longDesc5']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (current[key]) el.textContent = current[key];
    else el.remove();
  });

  const facts = [
    { k: 'Año', v: current.year },
    { k: 'Ubicación', v: current.location },
    { k: 'Cliente', v: current.client },
    { k: 'Tipo', v: current.type },
    { k: 'Área', v: current.area },
    { k: 'Estado', v: current.status },
  ];
  document.getElementById('detail-facts').innerHTML = facts.map(f => `
    <div class="detail-fact">
      <span class="detail-fact__k">${f.k}</span>
      <span class="detail-fact__v">${f.v}</span>
    </div>
  `).join('');

  // Galería de fotos
  const gallerySection = document.getElementById('gallery-section');
  if (current.fotos && current.fotos.length > 0) {
    gallerySection.hidden = false;
    document.getElementById('gallery-grid').innerHTML = current.fotos.map((filename, i) => `
      <div class="gallery-item" data-index="${i}" style="cursor:pointer">
        ${imgSlotHTML({ src: fotoSrc(current.id, filename), label: fotoLabel(filename) })}
        <div class="gallery-item__label">${fotoLabel(filename)}</div>
      </div>
    `).join('');
  }

  // Planos
  const planesSection = document.getElementById('planes-section');
  if (current.planes && current.planes > 0) {
    planesSection.hidden = false;
    const planoFiles = current.planosFiles ||
      Array.from({ length: current.planes }, (_, i) => `plano${i + 1}.jpg`);
    planesSection.querySelector('.planes-grid-container').innerHTML =
      `<div class="planes-grid">` +
      planoFiles.map((file, i) => `<div class="plano-item">
          <img src="${imagePath(current.id, encodeURIComponent(file))}" alt="Plano ${i + 1} — ${current.name}" loading="lazy">
        </div>`).join('') +
      `</div>`;
  }

  document.getElementById('next-project-link').href = `proyecto.html?id=${next.id}`;
  document.getElementById('next-project-name').textContent = next.name;

  // Fotos compartidas entre portada y lightbox
  const fotos = (current.fotos && current.fotos.length > 0)
    ? current.fotos
    : [current.portada || 'portada.jpg'];

  let currentIdx = 0;

  // Portada con carrusel inline
  const coverEl = document.getElementById('detail-cover');
  coverEl.innerHTML = imgSlotHTML({ src: portadaSrc(current), label: '' });

  function setCoverPhoto(idx) {
    currentIdx = ((idx % fotos.length) + fotos.length) % fotos.length;
    const img = coverEl.querySelector('.img-slot img');
    if (img) img.src = fotoSrc(current.id, fotos[currentIdx]);
  }

  if (fotos.length > 1) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'cover-nav cover-nav--prev';
    prevBtn.setAttribute('aria-label', 'Anterior');
    prevBtn.textContent = '←';
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); setCoverPhoto(currentIdx - 1); });

    const nextBtn = document.createElement('button');
    nextBtn.className = 'cover-nav cover-nav--next';
    nextBtn.setAttribute('aria-label', 'Siguiente');
    nextBtn.textContent = '→';
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); setCoverPhoto(currentIdx + 1); });

    coverEl.appendChild(prevBtn);
    coverEl.appendChild(nextBtn);
  }

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('.lightbox__img');
  const lbCounter = lb.querySelector('.lightbox__counter');

  function lbShow(idx) {
    currentIdx = ((idx % fotos.length) + fotos.length) % fotos.length;
    lbImg.src = fotoSrc(current.id, fotos[currentIdx]);
    lbImg.alt = fotoLabel(fotos[currentIdx]);
    lbCounter.textContent = `${currentIdx + 1} / ${fotos.length}`;
  }

  function lbOpen(idx) {
    lbShow(idx);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function lbClose() {
    lb.hidden = true;
    document.body.style.overflow = '';
  }

  coverEl.addEventListener('click', () => lbOpen(currentIdx));
  lb.querySelector('.lightbox__close').addEventListener('click', lbClose);
  lb.querySelector('.lightbox__prev').addEventListener('click', () => lbShow(currentIdx - 1));
  lb.querySelector('.lightbox__next').addEventListener('click', () => lbShow(currentIdx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) lbClose(); });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowLeft') lbShow(currentIdx - 1);
    if (e.key === 'ArrowRight') lbShow(currentIdx + 1);
  });

  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    galleryGrid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      lbOpen(parseInt(item.dataset.index, 10));
    });
  }
});
