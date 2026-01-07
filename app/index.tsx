import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CarouselView } from '@/components/ui';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <CarouselView/>
    </GestureHandlerRootView>
  );
}
