


// src/pixabay-api.js

const API_KEY = '47083807-1148cb0c408c5877c55e45261'; // Замініть на ваш реальний API ключ
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Функція для отримання зображень з Pixabay API
 * @param {string} query - Пошуковий запит
 * @param {number} page - Номер сторінки
 * @param {number} perPage - Кількість зображень на сторінку
 * @returns {Promise<Array>} - Масив зображень
 */
export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
