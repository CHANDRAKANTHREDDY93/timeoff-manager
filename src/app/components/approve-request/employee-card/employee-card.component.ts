import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() cardData;
  p: number = 1;
  constructor() { }

  ngOnInit() {
  }

  getWidth(value:any){
    let max = 160;
    return Math.round(((Math.abs(value))*100)/(max))+'%';
  }
}
