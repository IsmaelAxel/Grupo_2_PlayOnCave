import { useLoaderData } from "react-router-dom"
import { CategoriesInDb } from "../../component/CategoriesInDb"
import { ContentRowMovies } from "../../component/ContentRowMovies"

import { LastMovieInDb } from "../../component/LastMovieInDb"



export const Home = () => {

  const {totalProducts} = useLoaderData() 
  return (
    <>
    <ContentRowMovies  totalProducts={totalProducts} />
    <div className="row">

    <LastMovieInDb />
    <CategoriesInDb/>
  </div>
  </>
  )
}
