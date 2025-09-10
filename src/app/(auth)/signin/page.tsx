import useSignIn from "@/src/hooks/useSignIn";
import { SignInScreen } from "../../../screens/signin";

export default function SignIn() {
  const { control, errors, handleSubmit, isSubmitting, isValid, onSubmit } = useSignIn()
  
  return (
    <SignInScreen
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      isValid={isValid}
      onSubmit={onSubmit}
    />
  )
}