import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

import SwipeCard from '@/components/SwipeCard';
import { images } from '@/lib/images';

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleLike = () => {
    console.log('👈 BIEN');
    setIndex((prev) => prev + 1);
  };

  const handleDislike = () => {
    console.log('👉 DESCARTE');
    setIndex((prev) => prev + 1);
  };

  if (!images[index]) {
    return (
      <View style={styles.center}>
        <Text>No hay más tarjetas</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SwipeCard
        image={images[index].image}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
