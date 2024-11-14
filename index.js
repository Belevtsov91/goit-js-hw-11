/* empty css                      */import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const f="47083807-1148cb0c408c5877c55e45261",p="https://pixabay.com/api/";async function m(t,n=1,a=12){const r=`${p}?key=${f}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${a}`;try{const e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch images");return(await e.json()).hits}catch(e){throw console.error(e),e}}function h(t){const n=document.getElementById("gallery"),a=t.map(r=>`
    <div class="card">
      <a href="${r.largeImageURL}" class="gallery__item">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="card-info">
        <span><label>Likes</label>${r.likes}</span>
        <span><label>Views</label>${r.views}</span>
        <span><label>Comments</label>${r.comments}</span>
        <span><label>Downloads</label>${r.downloads}</span>
      </div>
    </div>
  `).join("");n.insertAdjacentHTML("beforeend",a)}function i(t){l.error({title:"Error",message:t,position:"topRight"})}function y(t){l.info({title:"Info",message:t,position:"topRight"})}let g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function b(){document.getElementById("loader").classList.remove("hidden")}function I(){document.getElementById("loader").classList.add("hidden")}function L(){const t=document.getElementById("gallery");t.innerHTML=""}async function w(t){t.preventDefault();const a=document.getElementById("search-input").value.trim();if(!a){i("Please enter a search query.");return}L(),b();try{const r=await m(a);if(r.length===0){y("Sorry, there are no images matching your search query. Please try again!");return}h(r),g.refresh()}catch{i("An error occurred while fetching images.")}finally{I()}}const d=document.getElementById("search-button");d.addEventListener("click",w);const c=document.getElementById("search-input");c.addEventListener("input",()=>{const t=c.value.trim();d.disabled=t===""});
//# sourceMappingURL=index.js.map
