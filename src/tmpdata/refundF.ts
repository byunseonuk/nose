import { OrderProduct } from './orderproduct';

export class RefundF {
  name:string;
  refundproduct:OrderProduct[];
  cause:string;
  date:string;
  complete:boolean;
}