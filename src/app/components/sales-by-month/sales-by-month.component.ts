import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }      
    },
    series: [
      {
        name: 'Arizona',
        type: 'line',
        data: [70, 69, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Connecticut',
        type: 'line',
        data: [47, 52, 44, 32, 29, 122, 125, 68, 62, 100, 126]
      },
      {
        name: 'Ohio',
        type: 'line',
        data: [10, 69, 125, 162, 15, 202, 135, 13, 22, 119, 196]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
