const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '×' : '☰';
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); menuBtn.textContent='☰';
  }));
}

const serviceSelect = document.querySelector('select[name="service"]');
document.querySelectorAll('[data-service]').forEach(card => card.addEventListener('click', () => {
  const value = card.dataset.service;
  if (serviceSelect) {
    serviceSelect.value = value;
    document.querySelector('#estimate').scrollIntoView({behavior:'smooth'});
    serviceSelect.focus({preventScroll:true});
  }
}));

const form = document.getElementById('quoteForm');
const success = document.getElementById('success');
const photos = document.getElementById('photos');
const preview = document.getElementById('preview');
let photoNames = [];

if (photos) photos.addEventListener('change', () => {
  preview.innerHTML = '';
  photoNames = [];
  [...photos.files].slice(0,6).forEach(file => {
    photoNames.push(file.name);
    const img = document.createElement('img');
    img.alt = file.name;
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  });
});

function makeLeadText(data) {
  return [
    'RODRIGUEZ LAWN MAINTENANCE — FREE ESTIMATE REQUEST',
    '', `Name: ${data.name || ''}`, `Phone: ${data.phone || ''}`, `Email: ${data.email || ''}`,
    `City: ${data.city || ''}`, `Address: ${data.address || ''}`, `Service: ${data.service || ''}`,
    `Frequency: ${data.frequency || ''}`, `Property: ${data.property_type || ''}`,
    `Details: ${data.details || ''}`, `Photos selected: ${data.photoNames?.join(', ') || 'None'}`
  ].join('\n');
}

let latestLeadText = '';
if (form) form.addEventListener('submit', (e) => {
  e.preventDefault();
  const raw = Object.fromEntries(new FormData(form).entries());
  const data = {...raw, photoNames, capturedAt:new Date().toISOString()};
  latestLeadText = makeLeadText(data);
  localStorage.setItem('rodriguez_demo_last_lead', JSON.stringify(data));
  success.hidden = false;
  form.querySelector('button[type="submit"]').textContent = 'Request Prepared ✓';
  const email = encodeURIComponent(`New free estimate request — ${data.name}`);
  const body = encodeURIComponent(latestLeadText);
  const emailLead = document.getElementById('emailLead');
  if (emailLead) emailLead.href = `mailto:rodriguezlawnmaintenance.ca@gmail.com?subject=${email}&body=${body}`;
  success.scrollIntoView({behavior:'smooth', block:'nearest'});
});

const copyLead = document.getElementById('copyLead');
if (copyLead) copyLead.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(latestLeadText); copyLead.textContent = 'Copied ✓'; }
  catch { copyLead.textContent = 'Select & copy from email'; }
  setTimeout(() => copyLead.textContent = 'Copy request', 2200);
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
function closeLightbox(){ if(lightbox) lightbox.hidden = true; document.body.style.overflow=''; }
document.querySelectorAll('[data-lightbox]').forEach(photo => photo.addEventListener('click', () => {
  if (!lightbox) return;
  lightboxImg.src = photo.dataset.lightbox;
  lightboxCaption.textContent = photo.querySelector('span')?.textContent || '';
  lightbox.hidden = false;
  document.body.style.overflow='hidden';
}));
document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
