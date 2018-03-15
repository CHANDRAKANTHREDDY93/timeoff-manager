import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  data: any=[{
    x: 10,
    y: 20
}, {
    x: 15,
    y: 10
}];
options: any;
canvas;
ctx;
  constructor() { }

  ngOnInit() {
    this.canvas=<HTMLCanvasElement>document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          datasets: [{
              label: '# of Votes',
              data: [60, 120, 40, 0]
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  }

}
