import { Image, StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useSwipeCard } from '@/lib/useSwipeCard';

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
  const { translateX, panGesture } = useSwipeCard(onLike, onDislike);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={image} style={styles.image} />
      </Animated.View>
    </GestureDetector>
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
