const BASE_URL = 'https://api.thecatapi.com/v1'
const API_KEY = 'live_tOJmP1g79vmtI5Ge64CbuUmmk0rX3vegnncRIyI4DcDXMn635avs4IBSHIaAHhVk';

const options = {
  headers: {
    'x-api-key':
      API_KEY,
  },
};

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, options)
    .then(response => response.json())
    .then(data => data.map(breed => ({ value: breed.id, name: breed.name })))
        .catch(error => console.log(error));
    
}

export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, options)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            return data[0]
        })
    .catch(error => console.log(error))
}
