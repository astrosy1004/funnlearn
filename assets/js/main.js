const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});}));
let english=false;
document.querySelector('.lang-toggle')?.addEventListener('click',e=>{english=!english;document.documentElement.lang=english?'en':'ko';document.querySelectorAll('[data-ko]').forEach(el=>el.innerHTML=english?el.dataset.en:el.dataset.ko);e.currentTarget.textContent=english?'KR':'EN';e.currentTarget.setAttribute('aria-label',english?'한국어로 보기':'영어로 보기');});
document.getElementById('year').textContent=new Date().getFullYear();
