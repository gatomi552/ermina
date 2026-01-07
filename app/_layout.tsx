import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {children}
    </GestureHandlerRootView>
  );
}
