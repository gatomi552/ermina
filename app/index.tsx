import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

import { getPhotos } from '@/lib/server_conection';

type Photo = {
  id: number;
  uri: string;
  createdAt: number;
};

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    const data: Photo[] = await getPhotos();
    setPhotos(data.reverse());
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => router.push('/camera')}>
        <Text style={{ padding: 20, fontSize: 18 }}>📷 Abrir cámara</Text>
      </TouchableOpacity>

      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={{ width: '100%', height: 300 }}
          />
        )}
      />
    </View>
  );
}
