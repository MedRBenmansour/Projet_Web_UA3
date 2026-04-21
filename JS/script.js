
import { recettes } from './data.js';

// ===============================
// ÉTAT DES CŒURS (VISUEL)
// ===============================
const favoris = new Set();

function setFavori(id) {
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

  // Nettoyage
  grid.textContent = '';

  if (liste.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.textContent = 'Aucune recette trouvée !';
    grid.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  liste.forEach(r => {
    const isSelected = recetteSelectionnee === r.id;
    const fav = estFavori(r.id);

    // ===== Card =====
    const card = document.createElement('div');
    card.className = 'card' + (isSelected ? ' selected' : '');
    card.dataset.id = r.id;

    // Image
    const imgWrap = document.createElement('div');
    imgWrap.className = 'card-image';

    const img = document.createElement('img');
    img.src = r.image;
    img.alt = r.nom;

    imgWrap.appendChild(img);

    // Body
    const body = document.createElement('div');
    body.className = 'card-body';

    // Title
    const title = document.createElement('h3');
    title.textContent = r.nom;

    // Meta
    const meta = document.createElement('div');
    meta.className = 'card-meta';

    const badge = document.createElement('span');
    badge.className = `badge ${r.pays}`;
    badge.textContent = r.pays === 'dz' ? 'Algérienne' : 'Tunisienne';

    const time = document.createElement('span');
    time.textContent = `⏱ ${r.temps}`;

    const persons = document.createElement('span');
    persons.textContent = `👥 ${r.personnes} pers.`;

    meta.append(badge, time, persons);

    // Footer
    const footer = document.createElement('div');
    footer.className = 'card-footer';

    const category = document.createElement('span');
    category.textContent = r.categorie;
    category.style.fontSize = '12px';
    category.style.color = 'var(--muted)';
    category.style.textTransform = 'capitalize';

    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn' + (fav ? ' active' : '');
    favBtn.textContent = fav ? '❤️' : '🤍';
    favBtn.dataset.id = r.id;

    footer.append(category, favBtn);

    body.append(title, meta, footer);
    card.append(imgWrap, body);

    // Events
    card.addEventListener('click', () => afficherDetail(r.id));

    favBtn.addEventListener('click', e => {
      e.stopPropagation();
      setFavori(r.id);
      renderGrid(getRecettesFiltrees());
    });

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// ===============================
// DÉTAIL RECETTE
// ===============================
function afficherDetail(id) {
  recetteSelectionnee = id;
  const r = recettes.find(x => x.id === id);
  if (!r) return;

  renderGrid(getRecettesFiltrees());

  const detail = document.getElementById('detail');
  const detailTitle = document.getElementById('detailTitle');

  detail.textContent = '';
  detail.style.display = 'block';
  detailTitle.style.display = 'block';

  const header = document.createElement('div');
  header.className = 'detail-header';

  const imgWrap = document.createElement('div');
  imgWrap.className = 'detail-image';

  const img = document.createElement('img');
  img.src = r.image;
  img.alt = r.nom;

  imgWrap.appendChild(img);

  const info = document.createElement('div');

  const h2 = document.createElement('h2');
  h2.textContent = r.nom;

  const sub = document.createElement('div');
  sub.className = 'detail-sub';

  const pays = document.createElement('span');
  pays.textContent = r.pays === 'dz' ? 'Algérienne' : 'Tunisienne';

  const time = document.createElement('span');
  time.textContent = `⏱ ${r.temps}`;

  const persons = document.createElement('span');
  persons.textContent = `👥 ${r.personnes} personnes`;

  const cat = document.createElement('span');
  cat.textContent = `Catégorie : ${r.categorie}`;
  cat.style.textTransform = 'capitalize';

  sub.append(pays, time, persons, cat);
  info.append(h2, sub);
  header.append(imgWrap, info);

  // Ingrédients
  const labelIng = document.createElement('div');
  labelIng.className = 'label';
  labelIng.textContent = 'Ingrédients';

  const ingrList = document.createElement('div');
  ingrList.className = 'ingr-list';

  r.ingredients.forEach(i => {
    const tag = document.createElement('span');
    tag.className = 'ingr-tag';
    tag.textContent = i;
    ingrList.appendChild(tag);
  });

  // Étapes
  const labelStep = document.createElement('div');
  labelStep.className = 'label';
  labelStep.textContent = 'Étapes de préparation';
  labelStep.style.marginTop = '1.25rem';

  const steps = document.createElement('ol');
  steps.className = 'steps';

  r.etapes.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e;
    steps.appendChild(li);
  });

  detail.append(header, labelIng, ingrList, labelStep, steps);
  detail.scrollIntoView({ behavior: 'smooth' });
}

// ===============================
// FILTRES & RECHERCHE
// ===============================
function getRecettesFiltrees() {
  const q = document.getElementById('searchInput').value.toLowerCase();

  return recettes.filter(r => {
    const search =
      r.nom.toLowerCase().includes(q) ||
      r.ingredients.some(i => i.toLowerCase().includes(q));

    const filtre =
      filtreActuel === 'tous' ||
      r.pays === filtreActuel ||
      r.categorie === filtreActuel;

    return search && filtre;
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

  document.getElementById('searchInput')
    .addEventListener('input', filterRecettes);

  document.getElementById('btnAleatoire')
    .addEventListener('click', recetteAleatoire);

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () =>
      setFiltre(chip.dataset.filtre, chip)
    );
  });

  const DarkMode = document.getElementById('DarkMode');
  if (DarkMode) {
    DarkMode.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      DarkMode.textContent = isDark ? '☀️' : '🌙';
    });
  }

  renderGrid();
});
