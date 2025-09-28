import colors from "@/src/constants/colors";
import { Feather } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export function NewTravelScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        <View style={styles.row}>
          <Link href="/(panel)/home/page">
            <Feather name="arrow-left" size={40} color={colors.white} />
          </Link>

          <Text style={styles.title}>Planejei</Text>
        </View>

        <Text style={styles.subTitle}>
          Vamos cadastrar sua próxima viagem
        </Text>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.zinc,
    padding: Platform.OS === 'ios' ? 16 : 0
  },
  container: {
    padding: 16,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  title: {
    fontSize: 30,
    color: colors.orange,
    fontWeight: '600'
  },
  subTitle: {
    fontSize: 28,
    marginTop: 14,
    marginBottom: 14,
    color: colors.white,
    fontWeight: '500'
  }
})