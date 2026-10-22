const modal = document.getElementById('demoModal');
let modalTrigger = null;
function openDemo(meal) { if (!modal) return; modalTrigger = document.activeElement; modal.classList.add('show'); document.body.style.overflow = 'hidden'; const select = document.getElementById('demoMeal'); if (meal && select) select.value = meal; if (select) select.focus(); }
function closeDemo() { if (!modal) return; modal.classList.remove('show'); document.body.style.overflow = ''; if (modalTrigger && typeof modalTrigger.focus === 'function') modalTrigger.focus(); modalTrigger = null; }
function toast(message) { const el = document.getElementById('siteToast'); if (!el) return; el.textContent = message; el.classList.add('show'); clearTimeout(window._toastTimer); window._toastTimer = setTimeout(() => el.classList.remove('show'), 3200); }
function previewOrder() { const meal = document.getElementById('demoMeal')?.value || 'sample meal'; closeDemo(); toast(`Preview for ${meal} — no order was placed.`); }
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle'), links = document.querySelector('.nav-links');
  if (toggle && links) { links.id = 'primary-navigation'; toggle.setAttribute('aria-controls', 'primary-navigation'); toggle.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); }); links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); })); }
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => { if (link.getAttribute('href') === page) { link.classList.add('active'); link.setAttribute('aria-current', 'page'); } });
  if (modal) { modal.addEventListener('click', event => { if (event.target === modal) closeDemo(); }); document.addEventListener('keydown', event => { if (event.key === 'Escape') closeDemo(); }); }
  const cards = [...document.querySelectorAll('[data-meal-card]')], search = document.getElementById('mealSearch'), empty = document.getElementById('noMeals'); let selectedFilter = 'all';
  const applyMealFilters = () => { const query = (search?.value || '').trim().toLowerCase(); let shown = 0; cards.forEach(card => { const inCategory = selectedFilter === 'all' || card.dataset.categories.split(' ').includes(selectedFilter); const visible = inCategory && card.textContent.toLowerCase().includes(query); card.hidden = !visible; if (visible) shown += 1; }); if (empty) empty.classList.toggle('show', shown === 0); };
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedFilter = button.dataset.filter; applyMealFilters(); }));
  if (search) search.addEventListener('input', applyMealFilters);
  document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); const message = form.querySelector('.form-message'); if (message) { message.textContent = 'Thanks! This is a front-end concept demo; your details were not sent or stored.'; message.classList.add('show'); } form.reset(); }));
});

