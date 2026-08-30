const categories = [
  {
    title: 'قسم التربية', icon: '🎓', desc: 'الخدمات المرتبطة بالتربية والتعليم',
    services: [
      ['تسجيلات فضاء الأولياء','خدمة خاصة بفضاء الأولياء'],
      ['تسجيلات فضاء الأساتذة','خدمة خاصة بفضاء الأساتذة'],
      ['تسجيلات منحة التمدرس','التسجيل والمتابعة الخاصة بمنحة التمدرس']
    ]
  },
  {
    title: 'قسم التكوين والتعليم عن بعد', icon: '💻', desc: 'التكوين والمراسلة والتعليم عن بعد',
    services: [
      ['تسجيلات التكوين','التسجيلات المتعلقة بالتكوين'],
      ['تسجيلات التكوين عن بعد','التكوين والدراسة بصيغة عن بعد'],
      ['تسجيلات المراسلة','خدمات التسجيل في المراسلة']
    ]
  },
  {
    title: 'قسم المواقع الجزائرية', icon: '🇩🇿', desc: 'الوصول إلى أهم التسجيلات والخدمات الجزائرية',
    services: [
      ['تسجيلات نفطال','خدمات وتسجيلات نفطال'],
      ['تسجيلات البوابة الرئيسية للخدمات الجزائرية','الوصول إلى البوابة الرئيسية للخدمات الجزائرية'],
      ['تسجيلات الدفتر العقاري','الخدمات المتعلقة بالدفتر العقاري'],
      ['تسجيلات أشبال الأمة والجيش','التسجيلات والخدمات المرتبطة بأشبال الأمة والجيش']
    ]
  },
  {
    title: 'قسم التعليم العالي', icon: '🏛️', desc: 'خدمات الجامعة والمنحة الجامعية',
    services: [
      ['التسجيلات الأولية للجامعة','التسجيل الأولي للطلبة الجامعيين'],
      ['تسجيلات الجامعة عن بعد','الخدمات الجامعية عن بعد'],
      ['تسجيلات المنحة الجامعية','التسجيل والمتابعة المتعلقة بالمنحة الجامعية']
    ]
  },
  {
    title: 'قسم البطالة', icon: '🧾', desc: 'خدمات طالبي العمل ومنحة البطالة',
    services: [
      ['تسجيلات ANEM','خدمات الوكالة الوطنية للتشغيل'],
      ['تسجيلات منحة البطالة','خدمات التسجيل المتعلقة بمنحة البطالة']
    ]
  }
];

const grid = document.getElementById('categoryGrid');
const quick = document.getElementById('quickList');
const modal = document.getElementById('serviceModal');
let activeService = null;

categories.forEach((cat, i) => {
  const el = document.createElement('article');
  el.className = 'category' + (i === 0 ? ' open' : '');
  el.innerHTML = `
    <button class="category-head" type="button">
      <span class="cat-icon">${cat.icon}</span>
      <span><h3>${cat.title}</h3><p>${cat.desc}</p></span>
      <span class="chev">⌄</span>
    </button>
    <div class="subservices"><div><div class="service-list">
      ${cat.services.map((s, si) => `<button class="service" type="button" data-cat="${i}" data-service="${si}"><span><b>${s[0]}</b><small>${s[1]}</small></span><span class="arrow">←</span></button>`).join('')}
    </div></div></div>`;
  el.querySelector('.category-head').addEventListener('click', () => el.classList.toggle('open'));
  grid.appendChild(el);
});

grid.addEventListener('click', e => {
  const btn = e.target.closest('.service');
  if (!btn) return;
  openService(+btn.dataset.cat, +btn.dataset.service);
});

categories.slice(0,5).forEach(cat => {
  const item = document.createElement('div');
  item.className = 'quick-item';
  item.innerHTML = `<span>${cat.icon} ${cat.title}</span><b>${cat.services.length} خدمات</b>`;
  quick.appendChild(item);
});

function openService(ci, si){
  const cat = categories[ci];
  const service = cat.services[si];
  activeService = {cat, service};
  document.getElementById('modalIcon').textContent = cat.icon;
  document.getElementById('modalCategory').textContent = cat.title;
  document.getElementById('modalTitle').textContent = service[0];
  document.getElementById('modalDesc').textContent = service[1] + '. يمكن لاحقًا ربط هذا الزر بالرابط الرسمي أو نموذج التسجيل الخاص بالخدمة.';
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
document.querySelectorAll('[data-close="true"]').forEach(x => x.addEventListener('click', closeModal));
document.addEventListener('keydown', e => {if(e.key==='Escape') closeModal()});
document.getElementById('startBtn').addEventListener('click', () => {
  if(!activeService) return;
  alert('الخدمة المختارة: ' + activeService.service[0] + '\n\nفي التعديل القادم يمكننا ربطها بالرابط أو نموذج التسجيل المطلوب.');
});
document.getElementById('year').textContent = new Date().getFullYear();
