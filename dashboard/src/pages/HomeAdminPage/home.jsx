import { useLoaderData } from "react-router-dom"
import { CategoriesInDb } from "../../component/CategoriesInDb"
import { ContentRowMovies } from "../../component/ContentRowMovies"
import { LastProductInDb } from "../../component/LastProductInDb"



export const Home = () => {

  const {totalProducts,totalUsers,totalSections} = useLoaderData() 
  return (
    <>
    <ContentRowMovies  totalProducts={totalProducts} totalUsers={totalUsers} totalSections={totalSections} />
    <div className="row">

    < LastProductInDb/>
    <CategoriesInDb/>
  </div>
  </>
  )
}
