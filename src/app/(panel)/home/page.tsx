import useProfile from "@/src/hooks/useProfile";
import { Button, Text, View } from "react-native";

export default function Home() {
  const { logout } = useProfile()

  return (
    <View>
      <Text>Home Page</Text>

      <Button
        title="Sair da conta"
        onPress={logout}
      />
    </View>
  );
}