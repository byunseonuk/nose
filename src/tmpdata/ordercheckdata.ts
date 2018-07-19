import { TmpProduct } from '../tmpdata/tmprocduct';
import { OrdercheckF } from '../tmpdata/ordercheckF';

export const OrderCheckData: OrdercheckF[] = [
  { name:'업체2', 
    orderp:[
      {name:'노스볼1', price:5000, amount:10},
      {name:'노스볼2', price:3000, amount:5},
      {name:'노스볼3', price:2000, amount:50},
      {name:'노스볼4', price:1000, amount:20},
      {name:'노스볼5', price:10000, amount:100},
    ], 
    totalprice:200000,
    paymentdate:'2018.07.14',
    paymentstate:'입금전'
  },
  { name:'업체1', 
    orderp:[
      {name:'노스볼1', price:5000, amount:10},
      {name:'노스볼2', price:3000, amount:5},
      {name:'노스볼3', price:2000, amount:50},
      {name:'노스볼4', price:1000, amount:20},
      {name:'노스볼5', price:10000, amount:100},
    ], 
    totalprice:200000,
    paymentdate:'2018.07.14',
    paymentstate:'입금전'
  },
  { name:'업체3', 
    orderp:[
      {name:'노스볼1', price:5000, amount:10},
      {name:'노스볼2', price:3000, amount:5},
      {name:'노스볼3', price:2000, amount:50},
      {name:'노스볼4', price:1000, amount:20},
      {name:'노스볼5', price:10000, amount:100},
    ], 
    totalprice:200000,
    paymentdate:'2018.07.13',
    paymentstate:'입금전'
  },
  { name:'업체4', 
    orderp:[
      {name:'노스볼1', price:5000, amount:10},
      {name:'노스볼2', price:3000, amount:5},
      {name:'노스볼3', price:2000, amount:50},
      {name:'노스볼4', price:1000, amount:20},
      {name:'노스볼5', price:10000, amount:100},
      {name:'노스볼5', price:10000, amount:100},
      {name:'노스볼5', price:10000, amount:100},
      {name:'노스볼5', price:10000, amount:100},
      {name:'노스볼5', price:10000, amount:100},
      {name:'노스볼5', price:10000, amount:100},
    ], 
    totalprice:200000,
    paymentdate:'2018.07.13',
    paymentstate:'입금전'
  },
  { name:'업체5', 
    orderp:[
      {name:'노스볼1', price:5000, amount:10},
      {name:'노스볼2', price:3000, amount:5},
    ], 
    totalprice:200000,
    paymentdate:'2018.07.13',
    paymentstate:'입금전'
  },
];
