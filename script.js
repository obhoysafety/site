document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav');
  const toggle=document.querySelector('.mobile-toggle');

  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('.links a').forEach(link=>{
      link.addEventListener('click',()=>{
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-label','Open menu');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
    if(nav) nav.classList.remove('open');
    if(toggle){
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Open menu');
    }
  }));

  const year=document.querySelector('#year');
  if(year) year.textContent=new Date().getFullYear();
});
