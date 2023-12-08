import { UseFetch } from "../hooks/UseFetch"

export const productCard = async () => {
    try {

        return await UseFetch('products')
        
    } catch (error) {
        console.error
    }
}