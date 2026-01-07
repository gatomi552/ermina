import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

import SwipeCard from '@/components/SwipeCard';
import { images } from '@/lib/images';
import '@/global.css';


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
      <View className= "flex=1 justify-center items-center bg-blue">
        <Text>No hay más tarjetas</Text>
      </View>
    );
  }

  return (
    <View className= "flex=1 justify-center items-center bg-green">
      <SwipeCard
        image={images[index].image}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </View>
  );
}
