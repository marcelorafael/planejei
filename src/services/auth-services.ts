import { supabase } from "../app/config/supabase"

supabase

export const authServices = {
    signUp: async (email: string, password: string, username: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            // options: {
            //     data: {
            //         username
            //     }
            // }
        })

        if (error) {
            throw new Error(error.message)
        }

        return data;

    }
}