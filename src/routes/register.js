import Index from '../pages/Index'
import Notfound from '../pages/404'
import Checkout from '../pages/Checkout'
import Order from '../pages/Order'
import Login from '../pages/Login'
import DIndex from '../pages/admin/index'
import AddProduct from '../pages/admin/add'


export const routes = [
    {
        path: '/',
        component: Index,
        exact: true,
        private: false
    },
    {
        path: '/orders',
        component: Order,
        exact: false,
        private: true
    },
    {
        path: '/checkout',
        component: Checkout,
        exact: false,
        private: true
    },
    {
        path: '/login',
        component: Login,
        exact: false,
        private: false
    },
    {
        path: '/admin',
        component: DIndex,
        exact: true,
        private: true
    },
    {
        path: '/admin/add',
        component: AddProduct,
        exact: false,
        private: true
    },
    {
        path: '/*',
        component: Notfound,
        exact: false,
        private: false
    }
];