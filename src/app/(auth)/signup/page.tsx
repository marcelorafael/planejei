import useSignUp from "@/src/hooks/useSignUp";
import { SignUpScreen } from "@/src/screens/signup";


export default function SignUp() {
  
  const {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    onSubmit
  } = useSignUp()

  return (
    <SignUpScreen
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      isSubmitting={isSubmitting}
      isValid={isValid}
      onSubmit={onSubmit}
    />
  )
}