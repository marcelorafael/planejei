import {
    useForm,
} from 'react-hook-form';
import { authServices } from "../services/auth-services";

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { z } from 'zod';

const signUpSchema = z.object({
    username: z.string().min(2, 'Nome de usuário obrigatório'),
    email: z.string().min(1, 'Nome de usuário obrigatório'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

const useSignUp = () => {

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid, errors}
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        mode: 'onBlur',
    });


    const onSubmit = async (data: SignUpFormData) => {
        try {
            await authServices.signUp(data.email, data.password, "username");
            router.replace('/(panel)/home/page');
        } catch (error) {
            console.log("Falha ao criar conta", error);
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

export default useSignUp;