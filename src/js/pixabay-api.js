const keyAPI = '48188433-e0448b24de47b1903ec6a4bb7';

export const fetchPhotos = query => {
  const params = new URLSearchParams({
    key: keyAPI,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
