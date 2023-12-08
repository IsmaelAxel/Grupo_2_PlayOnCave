import { productCard } from "../../services/product.services";

export const loader = async () => {
    try {

        const {data:allProducts} = await productCard();

        return {
            allProducts
        }
        
    } catch (error) {
        console.error
    }
}