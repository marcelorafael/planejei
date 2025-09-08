
import colors from "@/src/constants/colors";
import { SignUpFormData } from "@/src/hooks/useSignUp";
import { Link } from "expo-router";
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
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

import { Controller } from "react-hook-form";

interface SignUpScreenProps {
  control: Control<SignUpFormData>;
  handleSubmit: UseFormHandleSubmit<SignUpFormData>;
  errors: FieldErrors<SignUpFormData>;
  isSubmitting: boolean;
  isValid: boolean;
  onSubmit: (data: SignUpFormData) => Promise<void>;
}


export function SignUpScreen({
  control,
  handleSubmit,
  errors,
  isSubmitting,
  isValid,
  onSubmit
}: SignUpScreenProps) {
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
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Nome completo..."
                autoCapitalize="none"
                placeholderTextColor={colors.gray50}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.username && <Text style={styles.errorText}>{errors.username?.message}</Text>}
            </View>
          )}
        />


        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email..."
                autoCapitalize="none"
                placeholderTextColor={colors.gray50}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email?.message}</Text>}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="********"
                autoCapitalize="none"
                secureTextEntry={true}
                placeholderTextColor={colors.gray50}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.password && <Text style={styles.errorText}>{errors.password?.message}</Text>}
            </View>
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite novamente su senha"
                autoCapitalize="none"
                secureTextEntry={true}
                placeholderTextColor={colors.gray50}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword?.message}</Text>}
            </View>
          )}
        />


        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        <Link
          href="/(auth)/signin/page"
          style={styles.link}
        >
          Já possui uma conta? Faça o login!
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
  }
})