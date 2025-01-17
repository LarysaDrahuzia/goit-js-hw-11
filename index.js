import{i as l,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="48188433-e0448b24de47b1903ec6a4bb7",f=s=>{const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},h=s=>s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:a,downloads:u})=>`<a href="${r}" class="gallery-item">
  <div class="photo-card">
  <img src="${o}" alt="${n}" loading="lazy" width="360" />
  <div class="photo-info">
    <p class="photo-info-item">Likes<span>${e}</span></p>
	<p class="photo-info-item">Views<span>${t}</span></p>
	<p class="photo-info-item">Comments<span>${a}</span></p>
	<p class="photo-info-item">Downloads<span>${u}</span></p>
  </div>
  </div>
  </a>`).join(""),p=document.querySelector(".form-search"),c=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";const y=s=>{s.preventDefault(),c.innerHTML="",i.style.display="block";const o=s.currentTarget.elements.user_query.value.trim();if(o===""){l.warning({title:"Warning",message:"Please enter a search query!"});return}f(o).then(r=>{if(i.style.display="none",!r.hits.length){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=h(r.hits);c.insertAdjacentHTML("beforeend",n),new d(".gallery-item",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),p.reset()}).catch(r=>{i.style.display="none",l.error({title:"Error",message:"Failed to load images. Please try again later."})})};p.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
