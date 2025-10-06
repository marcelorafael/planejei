import colors from "@/src/constants/colors";
import { Feather } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.zinc} barStyle="light-content" />

        <View style={styles.row}>
          <Text style={styles.title}>Planejei</Text>

          <View style={styles.contentLinks}>
            <Link
              href="/(panel)/profile/page"
              style={styles.buttonAdd}
            >
              <Feather name="home" size={30} color={colors.white} />
            </Link>

            <Link
              href="/(panel)/travel/new/page"
              style={[styles.buttonAdd, { backgroundColor: colors.orange }]}
            >
              <Feather name="plus" size={30} color={colors.white} />
            </Link>
          </View>

        </View>

      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: colors.orange,
    fontSize: 30,
    fontWeight: '600'
  },
  contentLinks: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    borderRadius: 99,
    padding: 8,
  }
})