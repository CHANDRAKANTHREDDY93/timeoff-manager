import { Component, OnInit } from '@angular/core';
import { timeOffService } from '../../shared/timeOffService';

@Component({
  selector: 'app-green-stack',
  templateUrl: './green-stack.component.html',
  styleUrls: ['./green-stack.component.css']
})
export class GreenStackComponent implements OnInit {
  getTitleDate: any;
  constructor(private trendService: timeOffService) {
    this.trendService.getDate().subscribe(data =>{
      this.getTitleDate= data[0].date;
    }); 
   }

  ngOnInit() {
  }

}
