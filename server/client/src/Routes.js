import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Farmlist from "./pages/Farmlist"
import TokenPage from "./pages/TokenPage"
import { ADMIN_ROUTE, AUTOFARM_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TOKEN_ROUTE } from "./utils/consts"

export const authRoutes = [
{
  path:ADMIN_ROUTE,
  Component: Admin
}

]

export const publicRoutes = [
  
  {
    path:BASKET_ROUTE,
    Component: Basket
  },
  {
    path:AUTOFARM_ROUTE,
    Component: Farmlist
  },
  {
    path:LOGIN_ROUTE,
    Component: Auth
  },
  {
    path:REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path:TOKEN_ROUTE + '/:id',
    Component: TokenPage
  }
  
]