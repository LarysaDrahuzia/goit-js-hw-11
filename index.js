import{i,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="48188433-e0448b24de47b1903ec6a4bb7",d=s=>{const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},f=s=>s.map(({webformatURL:o,largeImageURL:r,tags:a,likes:e,views:t,comments:n,downloads:p})=>`<a href="${r}" class="gallery-item">
  <div class="photo-card">
  <img src="${o}" alt="${a}" loading="lazy" />
  <div class "photo-info">
    <p class="photo-info-item">Likes<span>${e}</span></p>
	<p class="photo-info-item">Views<span>${t}</span></p>
	<p class="photo-info-item">Comments<span>${n}</span></p>
	<p class="photo-info-item">Downloads<span>${p}</span></p>
  </div>
  </div>
  </a>`).join(""),l=document.querySelector(".form-search"),h=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=s=>{s.preventDefault();const o=s.target.searchQuery.value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search query!"});return}d(o).then(r=>{if(c.style.display="none",!r.hits.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=f(r.hits);h.insertAdjacentHTML("beforeend",a),new u(".gallery-item",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(r=>{c.style.display="none",i.error({title:"Error",message:"Failed to load images. Please try again later."})})};l.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
