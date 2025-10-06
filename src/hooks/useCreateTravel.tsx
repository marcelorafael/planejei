import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { supabase } from '../app/config/supabase';

const travelSchema = z.object({
    title: z.string().min(1, 'Nome da cidade é obrigatório'),
    city: z.string().min(2, 'Cidade / estqado é obrigatório'),
    hotel_address: z.string().min(5, 'Endereço do hotel é obrigatório'),
    start_date: z.string().min(10, 'Data de início é obrigatório'),
    end_date: z.string().min(10, 'Data de volta é obrigatório'),
});

export type TravelFormData = z.infer<typeof travelSchema>;

const useCreateTravel = () => {
    const[userId, setUserId] = useState<string | null>(null);

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TravelFormData>({
        resolver: zodResolver(travelSchema),
    })

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();

            setUserId(data?.user?.id ?? null);
        }

        fetchUser()
    })

    const createNewTravel = async (data: TravelFormData) => {
        console.log(data);
    }


    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        createNewTravel
    }
}

export default useCreateTravel;