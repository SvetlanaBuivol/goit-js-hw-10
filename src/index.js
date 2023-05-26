import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';


const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

breedSelect.addEventListener('change', onSelectChange)

fetchBreeds()
  .then(breeds => {
    breedSelectMarkup(breeds);
    new SlimSelect({
        select: breedSelect,
    });
  })
  .catch(error => console.log(error));

function breedSelectMarkup(breeds) {
  breedSelect.innerHTML = breeds
    .map(breed => `<option value="${breed.value}">${breed.name}</option>`)
    .join('');
}

function onSelectChange(e) {
    const breedId = e.currentTarget.value;
    fetchCatByBreed(breedId)
        .then(renderCatCard)
}

function renderCatCard(cat) {
    const html = `
              <img src="${cat.url}" alt="A cute cat">
              <div>
              <h2>${cat.breeds[0].name}</h2>
              <p>${cat.breeds[0].description}</p>
              <p><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>
              </div>
            `;
            catInfo.innerHTML = html;
          }

