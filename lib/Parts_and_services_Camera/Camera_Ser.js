import * as FileSystem from 'expo-file-system/legacy';
import { savePhoto } from '@/lib/server_conection';

export async function handleSavePhoto(uri) {
  const fileName = uri.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;

  await FileSystem.copyAsync({
    from: uri,
    to: newPath,
  });

  return savePhoto({
    uri: newPath,
    createdAt: Date.now(),
  });
}
