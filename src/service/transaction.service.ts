declare var _;
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {InterceptableHttp} from "../lib/ng-http-interceptor";
import {URLSearchParams} from "@angular/http";
import {config} from "../app/app.config";

@Injectable()
export class TransactionService{
  private serverUrl = config.serverUrl+'/shopTransaction';
  constructor(private http: InterceptableHttp){}

  pendingPayment(invoice:any, shop: any, deliveryInfo: any) :Observable<any>{
    let url = this.serverUrl+'/pendingPayment';
    console.log(invoice);
    console.log(shop);
    console.log(deliveryInfo);
    return this.http.post(url,{invoice: invoice, shop: shop, deliveryInfo: deliveryInfo});
  }
 
  findInvoice(queryParams: any): Observable<any>{
    let url = this.serverUrl+'/findInvoice';
    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams,(value,key) => {
      params.set(key,JSON.stringify(value));
    });
    console.log(params);
    return this.http.get(url,{search:params});
  }

  findOneInvoice(queryParams: any): Observable<any> {
    let url = this.serverUrl + '/findOneInvoice';
    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams,(value,key) => {
      params.set(key,JSON.stringify(value));
    });
    return this.http.get(url,{search:params});
  }

  exchangereturnRequest(shopId:any, invoiceId:any, status:any ): Observable<any>{
    let url = this.serverUrl + '/exchangereturnRequest';
    console.log(shopId);
    console.log(invoiceId);
    console.log(status);
    console.log(typeof(status));
    return this.http.post(url,{shopId:shopId, invoiceId:invoiceId, status:status});
  }

  findExchangeReturn(queryParams: any): Observable<any> {
    let url = this.serverUrl + '/findExchangeReturn';
    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams,(value,key) => {
      params.set(key,JSON.stringify(value));
    });
    return this.http.post(url,{search:params});
  }

  changeStatus(paymentId, status): Observable<any>{
    let url = this.serverUrl + '/changeStatus';
    console.log(paymentId);
    console.log(status);
    return this.http
      .put(url, {paymentId: paymentId, status: status});
  }
}