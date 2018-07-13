import { Component, OnInit} from '@angular/core';


@Component({
    selector: 'salesstatus',
    templateUrl: './salesstatus.html',
    styleUrls: ['./salesstatus.css']
})
export class SalesStatus implements OnInit {
    
    constructor(){}
    ngOnInit(){}
    
    // Pie
  public pieChartLabels:string[] = ['Smart NoseWork', 'NoseBall', 'NoseWorkit'];
  public pieChartData:number[] = [3, 5, 1];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
}