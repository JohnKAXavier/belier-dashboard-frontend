import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad',
        'Nectar Orange Juice',
        'Axe Desodorant'        
      ]
    },
    yAxis: {
      title: {
        text: ''
      }      
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Lenova Thinkpad',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Nectar Orange Juice',
            y: 385,
            color: '#7e0505',
          },
          {
            name: 'Axe Desodorant',
            y: 275,
            color: '#ed9e20',
          }          
        ]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
