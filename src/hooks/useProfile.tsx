import { router } from "expo-router"
import { authServices } from "../services/auth-services"

const useProfile = () => {

    const logout = async () => {
        try {
            await authServices.signOut()

            router.replace("/(auth)/signin/page")
        } catch (error) {
            console.log("Error during sign out:", error)
        }
    }

    return { logout }

}

export default useProfile