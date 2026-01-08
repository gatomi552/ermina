const API_URL = 'http://TU_IP_LOCAL:3000/photos';

export async function getPhotos() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function savePhoto(photo) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(photo),
  });

  return res.json();
}
