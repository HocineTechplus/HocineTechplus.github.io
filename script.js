const services = {
  awlyaa:{title:'تسجيلات فضاء الأولياء',category:'قسم التربية',icon:'👨‍👩‍👧‍👦',description:'الوصول إلى فضاء الأولياء والخدمات المرتبطة بمتابعة التمدرس.',url:''},
  teachers:{title:'تسجيلات فضاء الأساتذة',category:'قسم التربية',icon:'👩‍🏫',description:'الوصول إلى الخدمات الرقمية المخصصة للأساتذة.',url:''},
  schoolgrant:{title:'تسجيلات منحة التمدرس',category:'قسم التربية',icon:'🎒',description:'خدمات التسجيل والمتابعة المتعلقة بمنحة التمدرس.',url:''},
  training:{title:'تسجيلات التكوين',category:'التكوين والتعليم عن بعد',icon:'🛠️',description:'الوصول إلى خدمات ومواقع التسجيل الخاصة بالتكوين.',url:''},
  distanceTraining:{title:'تسجيلات التكوين عن بعد',category:'التكوين والتعليم عن بعد',icon:'💻',description:'الوصول إلى خدمات التكوين الإلكتروني وعن بعد.',url:''},
  onefd:{title:'تسجيلات المراسلة',category:'التكوين والتعليم عن بعد',icon:'📚',description:'الوصول إلى خدمات التعليم والتكوين عن بعد.',url:''},
  naftal:{title:'تسجيلات نفطال',category:'المواقع الجزائرية',icon:'⛽',description:'الوصول إلى الموقع والخدمات الإلكترونية المرتبطة بنفطال.',url:''},
  servicesPortal:{title:'البوابة الرئيسية للخدمات الجزائرية',category:'المواقع الجزائرية',icon:'🏛️',description:'الوصول إلى بوابة الخدمات العمومية الإلكترونية الجزائرية.',url:''},
  landBook:{title:'تسجيلات الدفتر العقاري',category:'المواقع الجزائرية',icon:'🏠',description:'الوصول إلى الخدمات الرقمية والوثائق المرتبطة بالعقار.',url:''},
  cadets:{title:'تسجيلات أشبال الأمة والجيش',category:'المواقع الجزائرية',icon:'🪖',description:'الوصول إلى المعلومات والخدمات الرسمية الخاصة بالتسجيل.',url:''},
  universityFirst:{title:'التسجيلات الأولية للجامعة',category:'قسم التعليم العالي',icon:'📝',description:'الوصول إلى خدمات التسجيل الأولي والتوجيه للطلبة الجدد.',url:''},
  universityDistance:{title:'تسجيلات الجامعة عن بعد',category:'قسم التعليم العالي',icon:'🖥️',description:'الوصول إلى الخدمات والمنصات الرقمية الخاصة بالجامعة.',url:''},
  universityGrant:{title:'تسجيلات المنحة الجامعية',category:'قسم التعليم العالي',icon:'💳',description:'الوصول إلى الخدمات المتعلقة بالمنحة الجامعية ومتابعتها.',url:''}
};

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.category-toggle').forEach(button=>{
    button.addEventListener('click',()=>{
      const card=button.closest('.category-card');
      const isOpen=card.classList.contains('open');
      document.querySelectorAll('.category-card').forEach(c=>{
        c.classList.remove('open');
        c.querySelector('.category-toggle')?.setAttribute('aria-expanded','false');
      });
      if(!isOpen){
        card.classList.add('open');
        button.setAttribute('aria-expanded','true');
      }
    });
  });

  const title=document.getElementById('serviceTitle');
  if(title){
    const key=new URLSearchParams(location.search).get('key');
    const service=services[key] || {title:'الخدمة غير موجودة',category:'بوابة الخدمات',icon:'🔎',description:'عد إلى الصفحة الرئيسية واختر إحدى الخدمات المتاحة.',url:''};
    document.title=`${service.title} | بوابة الخدمات`;
    title.textContent=service.title;
    document.getElementById('serviceCategory').textContent=service.category;
    document.getElementById('serviceIcon').textContent=service.icon;
    document.getElementById('serviceDescription').textContent=service.description;
    const link=document.getElementById('officialLink');
    const status=document.getElementById('linkStatus');
    if(service.url){
      link.href=service.url;
      link.target='_blank';
      link.classList.remove('disabled-link');
      status.textContent='سيتم فتح الموقع الرسمي في نافذة جديدة.';
    } else {
      link.addEventListener('click',e=>e.preventDefault());
    }
  }
});
