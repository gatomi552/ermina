import axios from 'axios';

// ⚠️ USA TU IP LOCAL, NO localhost
const API_URL = 'http://192.168.1.100:3000/photos';

export async function getPhotos() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log('❌ Error getPhotos:', error.message);
    throw error;
  }
}

export async function savePhoto(photo) {
  try {
    const response = await axios.post(API_URL, photo);
    return response.data;
  } catch (error) {
    console.log('❌ Error savePhoto:', error.message);
    throw error;
  }
}
