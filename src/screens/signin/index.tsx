import colors from "@/src/constants/colors";
import { SignInFormData } from "@/src/hooks/useSignIn";
import { Link } from "expo-router";
import { Control, Controller, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

interface SignInScreenProps {
  control: Control<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
  handleSubmit: UseFormHandleSubmit<SignInFormData>;
  isSubmitting: boolean;
  isValid: boolean;
  onSubmit: (data: SignInFormData) => Promise<void>;
}


export function SignInScreen({
  control,
  errors,
  handleSubmit,
  isSubmitting,
  isValid,
  onSubmit
}: SignInScreenProps) {
  return (
    <ScrollView
      style={{ backgroundColor: colors.zinc }}
      contentContainerStyle={{ flexGrow: 1, }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.zinc} barStyle="light-content" />

        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor={colors.gray50}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={{ color: 'red', marginBottom: 8 }}>{errors.email.message}</Text>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="********"
              autoCapitalize="none"
              secureTextEntry={true}
              placeholderTextColor={colors.gray50}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={{ color: 'red', marginBottom: 8 }}>{errors.password.message}</Text>}


        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
          <Text style={styles.buttonText}>
            { isSubmitting ? 'Carregando...' : 'Acessar conta' }
          </Text>
        </TouchableOpacity>

        <Link
          href="/(auth)/signup/page"
          style={styles.link}
        >
          Ainda não possui uma conta? Cadastre-se
        </Link>



      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: colors.zinc
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 34,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray100,
    borderRadius: 4,
    marginBottom: 12,
    padding: 12,
  },
  button: {
    backgroundColor: colors.orange,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  link: {
    color: colors.white,
    marginTop: 16,
    textAlign: 'center'
  },
  errorText: {
    color: colors.red,
    marginBottom: 8,
  },
})