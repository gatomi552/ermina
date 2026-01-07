import { useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';  // Importa Gesture.Pan() desde gesture-handler

export const useCarouselController = () => {
  const translateX = useSharedValue(0);

  // Crear el gesto con Gesture.Pan()
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      // Aquí podrías agregar lógica para "saltar" a la imagen más cercana, o para restaurar a la posición inicial
      if (translateX.value > 100) {
        translateX.value = 0; // Ejemplo: resetea el gesto si se mueve demasiado a la derecha
      }
    });

  return { translateX, panGesture };
};
