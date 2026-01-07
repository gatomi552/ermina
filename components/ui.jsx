import React from 'react';
import { View, Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { images } from '@/lib/Imagenes';
import { ImageCard } from '@/components/Prin.jsx';
import { useCarouselController } from '@/lib/logit';

export const CarouselView = () => {
  const { translateX, onUpdate } = useCarouselController();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const panGesture = Gesture.Pan()
    .onUpdate(onUpdate);

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center">
      <Text className="text-xl font-bold mb-4">Desliza las imágenes</Text>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={animatedStyle} className="flex-row">
          {images.map((img) => (
            <ImageCard key={img.id} uri={img.uri} />
          ))}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};