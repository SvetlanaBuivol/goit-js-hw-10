const options = {
  headers: {
    'x-api-key':
      'live_tOJmP1g79vmtI5Ge64CbuUmmk0rX3vegnncRIyI4DcDXMn635avs4IBSHIaAHhVk',
  },
};

const url = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
  return fetch(url, options)
    .then(response => response.json())
    .then(data => data.map(breed => ({ value: breed.id, name: breed.name })))
    .catch(error => console.log(error));
}

export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options)
        .then(response => {
            return response.json()
        })
        .then(data => data[0])
    .catch(error => console.log(error))
}
