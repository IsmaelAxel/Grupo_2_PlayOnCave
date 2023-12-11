import { UseFetch } from "../hooks/UseFetch"

export const totalProductInDB = async () => {
    try {

        return await UseFetch('products')
        
    } catch (error) {
        console.error
    }
}