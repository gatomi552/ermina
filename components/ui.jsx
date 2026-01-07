import React from 'react';
import { View, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler'; 
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { images } from '../model/images.model'; // Modelo de las imágenes
import { ImageCard } from './ImageCard'; // Componente que muestra las imágenes
import { useCarouselController } from '../controller/useCarouselController'; // El hook

export const CarouselView = () => {
  // Usamos el hook para obtener la lógica de los gestos
  const { translateX, gestureHandler } = useCarouselController();

  // Estilo animado para mover las imágenes en el eje X
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center">
      <Text className="text-xl font-bold mb-4">Desliza las imágenes</Text>

      {/* Gestor del gesto de arrastre (PanGestureHandler) */}
      <PanGestureHandler onGestureEvent={gestureHandler}>
        {/* Aquí animamos la vista que contiene las imágenes */}
        <Animated.View style={animatedStyle} className="flex-row">
          {images.map((img) => (
            // Renderizamos las imágenes con el componente ImageCard
            <ImageCard key={img.id} uri={img.uri} />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
