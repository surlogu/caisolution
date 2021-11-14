import { Component, OnInit, Output } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
profile:any={};
localProfileData:any=localStorage.getItem('profile')

  constructor() { }


  ngOnInit(): void {

    if(this.localProfileData!=undefined){
      this.localProfileData=JSON.parse(this.localProfileData)
      this.profile=this.localProfileData;

    }else{
      this.profile={"name":"Logesh", "email":"test@check.io", "phone":"8074658888", "address":"st, Trichy", "pincode":"621104", "lat":"10.7904833N", "lon":"78.7046725E"}

        localStorage.setItem('profile', JSON.stringify(this.profile))
    }


  }



//
public pieChartOptions: ChartOptions = {
    responsive: false,
  };
  public pieChartLabels: Label[] = ['Test1', 'Test2', 'Test3'];
  public pieChartDataNew: SingleDataSet = [16, 8, 4];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;

  //

  //
   public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive:false,
    scales: {
                xAxes: [{
                    gridLines: {
                        lineWidth: 0,
                        color: "rgba(255,255,255,0)"
                    }
                }]
            }

  };
  public lineChartLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public lineChartType = 'line';
  public lineChartLegend = false;
  public lineChartData = [
    {data: [70, 10, 35, 31, 86, 35, 50], label: 'DEMO', fill: false, tension: 0},

  ];

  public lineChartColors: Color[] = [
    {
      borderColor: '#84A9AC',
      borderWidth: 2
      // backgroundColor: 'rgba(255,255,0,0.28)',
    }
  ];

//

}
