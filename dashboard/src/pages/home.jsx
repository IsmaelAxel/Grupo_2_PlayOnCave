import { CategoriesInDb } from "../component/CategoriesInDb"
import { ContentRowMovies } from "../component/ContentRowMovies"

import { LastMovieInDb } from "../component/LastMovieInDb"



export const Home = () => {
  return (
    <>
    <ContentRowMovies />
    <div className="row">

    <LastMovieInDb />
    <CategoriesInDb/>
  </div>
  </>
  )
}
