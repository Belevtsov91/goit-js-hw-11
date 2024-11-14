



import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  const markup = images.map(image => `
    <div class="card">
      <a href="${image.largeImageURL}" class="gallery__item">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="card-info">
        <span><label>Likes</label>${image.likes}</span>
        <span><label>Views</label>${image.views}</span>
        <span><label>Comments</label>${image.comments}</span>
        <span><label>Downloads</label>${image.downloads}</span>
      </div>
    </div>
  `).join('');
  
  gallery.insertAdjacentHTML('beforeend', markup);
}


export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight'
  });
}


export function showInfo(message) {
  iziToast.info({
    title: 'Info',
    message: message,
    position: 'topRight'
  });
}
