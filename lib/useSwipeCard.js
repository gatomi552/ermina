import { Dimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const SWIPE_LIMIT = width * 0.25;

export function useSwipeCard(onLeft, onRight) {
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (translateX.value < -SWIPE_LIMIT) {
        translateX.value = withSpring(-width, {}, () => {
          onLeft && onLeft();
        });
      } else if (translateX.value > SWIPE_LIMIT) {
        translateX.value = withSpring(width, {}, () => {
          onRight && onRight();
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  return {
    translateX,
    panGesture,
  };
}