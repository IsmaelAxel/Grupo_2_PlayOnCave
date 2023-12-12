import { totalProductInDB } from "../../services/product.services";
import { totalUsersInDB } from "../../services/users.services";

export const loader = async () => {
  try {
    const { totalProducts, totalSections } = await totalProductInDB();
    const { totalUsers } = await totalUsersInDB();

    return {
      totalProducts,totalUsers,totalSections
    };
  } catch (error) {
    console.error;
  }
};
