
import { recettes } from './data.js';

// ===============================
// ÉTAT DES CŒURS (VISUEL)
// ===============================

const favoris = new Set();

function toggleFavori(id) {
  favoris.has(id) ? favoris.delete(id) : favoris.add(id);
}

function estFavori(id) {
  return favoris.has(id);
}

// ── État UI ────────────────────
let filtreActuel = 'tous';
let recetteSelectionnee = null;

// ===============================
// RENDU DE LA GRILLE
// ===============================
function renderGrid(liste = recettes) {
  const grid = document.getElementById('grid');

  if (liste.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        Aucune recette trouvée !<br>
        <small>Essayez un autre mot-clé</small>
      </div>
    `;
    return;
  }

  grid.innerHTML = liste.map(r => {
    const isSelected = recetteSelectionnee === r.id;
    const fav = estFavori(r.id);

    return `
      <div class="card${isSelected ? ' selected' : ''}" data-id="${r.id}">
        
<div class="card-image">
  <img src="${r.image}" alt="${r.nom}">
</div>


        <div class="card-body">
          <h3>${r.nom}</h3>

          <div class="card-meta">
            <span class="badge ${r.pays}">
              ${r.flag} ${r.pays === 'dz' ? 'Algérienne' : 'Tunisienne'}
            </span>
            <span>⏱ ${r.temps}</span>
            <span>👥 ${r.personnes} pers.</span>
          </div>

          <div class="card-footer">
            <span style="font-size:12px;color:var(--muted);text-transform:capitalize">
              ${r.categorie}
            </span>
            <button class="fav-btn ${fav ? 'active' : ''}" data-id="${r.id}">
              ${fav ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Carte → détail
  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      afficherDetail(Number(card.dataset.id));
    });
  });

  // Cœur carte
  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      toggleFavori(id);
      renderGrid(getRecettesFiltrees());
      if (recetteSelectionnee === id) afficherDetail(id);
    });
  });
}

// ===============================
// DÉTAIL RECETTE (AVEC ❤️)
// ===============================
function afficherDetail(id) {
  recetteSelectionnee = id;
  const r = recettes.find(x => x.id === id);
  if (!r) return;

  renderGrid(getRecettesFiltrees());

  const fav = estFavori(r.id);

  document.getElementById('detailTitle').style.display = 'block';
  const detail = document.getElementById('detail');
  detail.style.display = 'block';

  detail.innerHTML = `
    <div class="detail-header">
      
    <div class="detail-image">
      <img src="${r.image}" alt="${r.nom}">
    </div>


      <div>
        <h2>${r.nom}</h2>
        <div class="detail-sub">
          <span>${r.flag} ${r.pays === 'dz' ? 'Algérienne' : 'Tunisienne'}</span>
          <span>⏱ ${r.temps}</span>
          <span>👥 ${r.personnes} personnes</span>
          <span style="text-transform:capitalize">📁 ${r.categorie}</span>
        </div>

      </div>
    </div>

    <div class="label">Ingrédients</div>
    <div class="ingr-list">
      ${r.ingredients.map(i => `<span class="ingr-tag">${i}</span>`).join('')}
    </div>

    <div class="label" style="margin-top:1.25rem">Étapes de préparation</div>
    <ol class="steps">
      ${r.etapes.map(e => `<li>${e}</li>`).join('')}
    </ol>
  `;

  detail.scrollIntoView({ behavior: 'smooth' });
}

// ===============================
// FILTRES / RECHERCHE
// ===============================
function getRecettesFiltrees() {
  const q = document.getElementById('searchInput').value.toLowerCase();

  return recettes.filter(r => {
    const matchSearch =
      r.nom.toLowerCase().includes(q) ||
      r.ingredients.some(i => i.toLowerCase().includes(q));

    const matchFiltre =
      filtreActuel === 'tous' ||
      r.pays === filtreActuel ||
      r.categorie === filtreActuel;

    return matchSearch && matchFiltre;
  });
}

function filterRecettes() {
  renderGrid(getRecettesFiltrees());
}

function setFiltre(filtre, el) {
  filtreActuel = filtre;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  filterRecettes();
}

// ===============================
// RECETTE ALÉATOIRE
// ===============================
function recetteAleatoire() {
  const r = recettes[Math.floor(Math.random() * recettes.length)];
  afficherDetail(r.id);
}

// ===============================
// INIT
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').addEventListener('input', filterRecettes);
  document.getElementById('btnAleatoire').addEventListener('click', recetteAleatoire);

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      setFiltre(chip.dataset.filtre, chip);
    });
  });

  renderGrid();
});