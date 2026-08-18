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

  document.getElementById('detail-cover').innerHTML = imgSlotHTML({
    src: portadaSrc(current),
    label: 'Portada',
  });

  document.getElementById('detail-tagline').textContent = current.tagline;
  document.getElementById('detail-desc-1').textContent = current.longDesc;
  document.getElementById('detail-desc-2').textContent = current.longDesc2;
  const desc3el = document.getElementById('detail-desc-3');
  if (current.longDesc3) desc3el.textContent = current.longDesc3;
  else desc3el.remove();

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

  // Galería de fotos — solo renderiza si hay fotos definidas
  const gallerySection = document.getElementById('gallery-section');
  if (current.fotos && current.fotos.length > 0) {
    gallerySection.hidden = false;
    document.getElementById('gallery-grid').innerHTML = current.fotos.map(filename => `
      <div class="gallery-item">
        ${imgSlotHTML({ src: fotoSrc(current.id, filename), label: fotoLabel(filename) })}
        <div class="gallery-item__label">${fotoLabel(filename)}</div>
      </div>
    `).join('');
  }

  // Planos — solo renderiza la sección si planes > 0
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
});
