import { Text, View, Button } from 'react-native';
import { Href, useRouter } from 'expo-router';
import { useSession } from '../context/ctx';


export default function Index() {
  const { signOut } = useSession();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signOut();
        }}
        style={{ marginBottom: 20 }}
      >
        Sign Out
      </Text>

      <Button
        title="Go to Products"
        onPress={() => {
          router.push('/products' as Href); // Redirige a la pantalla de productos
        }}
      />
    </View>
  );
}
