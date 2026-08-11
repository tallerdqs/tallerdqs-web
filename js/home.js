/* tallerDQS — home page project grid */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('home-grid');
  if (!grid) return;
  const projects = getHomeProjects();
  grid.innerHTML = projects.map(p => `
    <article class="home-card img-card">
      <div class="home-card__media">
        ${imgSlotHTML({ src: imagePath(p.id, 'portada.jpg'), label: p.name, mono: true })}
        <span class="home-card__num">${p.num}</span>
      </div>
      <div class="home-card__meta">
        <a class="home-card__title" href="proyecto.html?id=${p.id}">${p.name} ↗</a>
        <span class="home-card__year">${p.year}</span>
      </div>
      <div class="home-card__sub">${p.type} · ${p.location}</div>
    </article>
  `).join('');
});
