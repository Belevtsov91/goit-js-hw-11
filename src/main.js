import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError, showInfo } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  const loader = document.getElementById('loader');
  loader.classList.remove('hidden');
}

function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
}

function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

/**
 * Обробник події для сабміту форми пошуку
 * @param {Event} event
 */
async function handleSearch(event) {
  event.preventDefault(); 
  
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();
  
  if (!query) {
    showError('Please enter a search query.');
    return;
  }

  clearGallery();
  showLoader();
  
  try {
    const images = await fetchImages(query);
    
    if (images.length === 0) {
      showInfo('Sorry, there are no images matching your search query. Please try again!');
      return;
    }
    
    renderImages(images);
    lightbox.refresh(); 
  } catch (error) {
    showError('An error occurred while fetching images.');
  } finally {
    hideLoader();
  }
}


const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearch);  // Тепер обробляється сабміт форми


const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  searchButton.disabled = query === '';  
});
