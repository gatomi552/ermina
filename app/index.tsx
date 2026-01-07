import { Text, View } from "react-native";
import { CarouselView } from '@/components/ui';
import "@/global.css";

export default function App() {
  return (
    <View className="flex-1">
      <CarouselView/>
    </View>
  );
}
