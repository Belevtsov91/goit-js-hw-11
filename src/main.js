



// src/main.js

import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError, showInfo } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Ініціалізація SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Функція для показу індикатора завантаження
 */
function showLoader() {
  const loader = document.getElementById('loader');
  loader.classList.remove('hidden');
}

/**
 * Функція для приховування індикатора завантаження
 */
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
}

/**
 * Функція для очищення галереї
 */
function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

/**
 * Обробник події для кнопки пошуку
 * @param {Event} event - Подія
 */
async function handleSearch(event) {
  event.preventDefault();
  
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();
  
  if (!query) {
    showError('Please enter a search query.');
    return;
  }
  
  // Очистити галерею та показати індикатор завантаження
  clearGallery();
  showLoader();
  
  try {
    const images = await fetchImages(query);
    
    if (images.length === 0) {
      showInfo('Sorry, there are no images matching your search query. Please try again!');
      return;
    }
    
    renderImages(images);
    lightbox.refresh(); // Оновити SimpleLightbox після додавання нових елементів
  } catch (error) {
    showError('An error occurred while fetching images.');
  } finally {
    hideLoader();
  }
}

// Отримати посилання на кнопку пошуку та додати обробник події
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSearch);

// Отримати посилання на поле введення та увімкнути кнопку, коли вводяться символи
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  searchButton.disabled = query === '';
});
