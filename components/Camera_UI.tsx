import { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CameraView, CameraType } from 'expo-camera';

type Props = {
  onPhotoTaken: (uri: string) => void;
};

export default function CameraComponent({ onPhotoTaken }: Props) {
  const cameraRef = useRef<CameraView>(null);

  const takePhoto = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    onPhotoTaken(photo.uri);
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={cameraRef} facing={CameraType.back} style={{ flex: 1 }} />
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.text}>📸</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
  },
});
