import { totalProductInDB } from "../../services/product.services";

export const loader = async () => {
  try {
    const { totalProducts } = await totalProductInDB();

    return {
      totalProducts
    };
  } catch (error) {
    console.error;
  }
};
