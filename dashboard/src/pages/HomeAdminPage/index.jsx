
import {useLoaderData} from 'react-router-dom';
import { ProductCard } from '../../components/card/productCard';


export const HomeAdminPage = () => {

  const {allProducts} = useLoaderData()
  return (
    <>
   <ProductCard allProducts={allProducts} />
  </>
  )
}