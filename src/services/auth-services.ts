import { supabase } from "../app/config/supabase"

supabase

export const authServices = {
    signIn: async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            throw new Error(error.message)
        }

        return data;
    },
    
    signUp: async (email: string, password: string, username: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            // options: {
            //     data: {
            //         name: username
            //     }
            // }
        })

        if (error) {
            throw new Error(error.message)
        }

        return data;

    },

    signOut: async () => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            throw new Error(error.message)
        }

        return true;
    },

}

