import {createBrowserRouter} from 'react-router-dom'

import {  HomeAdminPage } from './pages/HomeAdminPage'
import { loader } from './pages/HomeAdminPage/loader'

export const router = createBrowserRouter (
[
   { path : '/' ,
    element : <HomeAdminPage/>,
    loader : loader,
    
}])