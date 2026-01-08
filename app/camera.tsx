import { router } from 'expo-router';
import CameraComponent from '@/components/Camera_UI';
import { handleSavePhoto } from '@/lib/Parts_and_services_Camera/Camera_Ser';

export default function CameraScreen() {
  const onPhotoTaken = async (uri: string) => {
    await handleSavePhoto(uri);
    router.back();
  };

  return <CameraComponent onPhotoTaken={onPhotoTaken} />;
}