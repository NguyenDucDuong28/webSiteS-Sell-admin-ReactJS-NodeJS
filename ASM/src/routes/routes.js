import Home from "../Page/Home";
import routesConfig from "../config/routesConfig";
import HomeLayout from "../components/layout/HomeLayout";
import ProductDetail from "../Page/ProductDetail";
import Cart from "../Page/Cart";
import Login from "../components/Authentocatin/Login/Login";
import Register from "../components/Authentocatin/Register/Register";
import ChangePassWord from "../components/Authentocatin/ChangePassWord/ChangePassWord";
import ForgotPassword from "../components/Authentocatin/ForgotPassword/ForgotPassword";
const publicRouterComponent = [
  {
    path: routesConfig.home,
    component: Home,
    layout: HomeLayout,
  },
  {
    path: routesConfig.productDetail,
    component: ProductDetail,
    layout: HomeLayout,
  },
  {
    path: routesConfig.cart,
    component: Cart,
    layout: HomeLayout,
  },
  {
    path: routesConfig.login,
    component: Login,
    layout: HomeLayout,
  },
  {
    path: routesConfig.register,
    component: Register,
    layout: HomeLayout,
  },
  {
    path: routesConfig.changepassword,
    component: ChangePassWord,
    layout: HomeLayout,
  },
  {
    path: routesConfig.forgotpassword,
    component: ForgotPassword,
    layout: HomeLayout,
  },
];

export default publicRouterComponent;
