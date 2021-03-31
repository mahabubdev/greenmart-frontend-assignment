import Index from '../pages/Index'
import Notfound from '../pages/404'
import Checkout from '../pages/Checkout'
import Order from '../pages/Order'


export const routes = [
    {
        path: '/',
        component: Index,
        exact: true,
        private: false
    },
    {
        path: '/order',
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
        path: '/*',
        component: Notfound,
        exact: false,
        private: false
    }
];