import { Image, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useSwipeCard } from '../lib/useSwipeCard';

type SwipeCardProps = {
  image: any;
  onLike: () => void;
  onDislike: () => void;
};

export default function SwipeCard({
  image,
  onLike,
  onDislike,
}: SwipeCardProps) {
  const { translateX, gestureHandler } = useSwipeCard(onLike, onDislike);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={image} style={styles.image} />
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 450,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
