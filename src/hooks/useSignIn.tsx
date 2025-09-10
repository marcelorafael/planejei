import {
    useForm,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { z } from 'zod';
import { authServices } from '../services/auth-services';

const signInSchema = z.object({
    email: z.string().min(1, 'Nome de usuário obrigatório'),
    password: z.string().min(1, 'Senha é obrigatória'),
});

export type SignInFormData = z.infer<typeof signInSchema>;

const useSignIn = () => {

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid, errors}
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        mode: 'onBlur',
    });


    const onSubmit = async (data: SignInFormData) => {
        try {
            await authServices.signIn(data.email, data.password);
            router.replace('/(panel)/home/page');
        } catch (error) {
            console.log("Falha ao logar usuário", error);
        }
    };

    return {
        onSubmit,
        handleSubmit,
        control,
        isSubmitting,
        isValid,
        errors
    };
};

export default useSignIn;