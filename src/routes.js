
import OdrHistory from './Components/OdrHistory.vue';
import OdrSend from './Components/OdrSend.vue';
import OrderDetail from './Components/OrderDetail.vue';

 export const routes=[
      {
        path: '/Oder-History',
        component: OdrHistory
      },
      {
        path: '',
        component: OdrSend
      },
      {
        path: '/order-detail',
        name: 'order-detail',
        component: OrderDetail
      }
    ];