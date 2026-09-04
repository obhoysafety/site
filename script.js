
document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav'),toggle=document.querySelector('.mobile-toggle');
  if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
  const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();
});
