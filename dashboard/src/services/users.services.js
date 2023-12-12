import { UseFetch } from "../hooks/UseFetch"

export const totalUsersInDB = async () => {
    try {

        return await UseFetch('users')
        
    } catch (error) {
        console.error
    }
}