import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Slot } from 'expo-router';
import { useSession } from '../context/ctx';

export default function ProtectedLayout() {
  const { session, isLoading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session) {
      router.replace('/sign-in');
    }
  }, [isLoading, session]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}
