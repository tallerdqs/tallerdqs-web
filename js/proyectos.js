/* tallerDQS — Proyectos index: filters + 4-col grid */

document.addEventListener('DOMContentLoaded', () => {
  const allProjects = getSortedProjects();
  const types = uniqueInOrder(allProjects.map(p => p.type));
  const locs = uniqueInOrder(allProjects.map(p => p.location));
  const years = uniqueInOrder(allProjects.map(p => p.year)).sort((a, b) => b.localeCompare(a));

  const state = { type: 'Todos', loc: 'Todos', year: 'Todos' };

  const els = {
    typeRow: document.getElementById('filter-type'),
    locRow: document.getElementById('filter-loc'),
    yearRow: document.getElementById('filter-year'),
    count: document.getElementById('proyectos-count'),
    gridWrap: document.getElementById('proyectos-grid-wrap'),
  };

  function chip(label, key) {
    const active = state[key] === label;
    return `<button class="chip${active ? ' is-active' : ''}" data-key="${key}" data-value="${label}">${label}</button>`;
  }

  function renderChips() {
    els.typeRow.innerHTML = ['Todos', ...types].map(v => chip(v, 'type')).join('');
    els.locRow.innerHTML = ['Todos', ...locs].map(v => chip(v, 'loc')).join('');
    els.yearRow.innerHTML = ['Todos', ...years].map(v => chip(v, 'year')).join('');
  }

  function filtered() {
    return allProjects.filter(p =>
      (state.type === 'Todos' || p.type === state.type) &&
      (state.loc === 'Todos' || p.location === state.loc) &&
      (state.year === 'Todos' || p.year === state.year)
    );
  }

  function renderGrid() {
    const list = filtered();
    els.count.textContent = `${fmt2(list.length)} / ${fmt2(allProjects.length)} obras`;

    if (!list.length) {
      els.gridWrap.innerHTML = `<div class="no-results">No hay proyectos con estos filtros. <button id="clear-filters">Limpiar filtros</button></div>`;
      document.getElementById('clear-filters').addEventListener('click', () => {
        state.type = 'Todos'; state.loc = 'Todos'; state.year = 'Todos';
        renderChips(); renderGrid();
      });
      return;
    }

    els.gridWrap.innerHTML = `<div class="proyectos-grid">${list.map(p => `
      <article class="proj-card img-card">
        <div class="proj-card__media">
          ${imgSlotHTML({ src: portadaSrc(p), label: p.name, mono: true })}
          <span class="proj-card__num">${p.num}</span>
        </div>
        <a class="proj-card__title" href="proyecto.html?id=${p.id}">${p.name} ↗</a>
        <div class="proj-card__sub">${p.type} · ${p.location} · ${p.year}</div>
      </article>
    `).join('')}</div>`;
  }

  document.querySelector('.filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    state[btn.dataset.key] = btn.dataset.value;
    renderChips();
    renderGrid();
  });

  renderChips();
  renderGrid();
});
