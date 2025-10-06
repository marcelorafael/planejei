import useProfile from "@/src/hooks/useProfile"
import { Button, Text, View } from "react-native"


export default function Profile() {
  const { logout } = useProfile()

  return (
    <View>
      <Text>Pagina perfil</Text>

      <Button title="Sair da conta" onPress={logout} />
    </View>
  )
}