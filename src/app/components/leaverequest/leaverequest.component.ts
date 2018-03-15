import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {
  buttonText ="Approved";
  buttonclass = "red-button"
  closebtn = "Decline";
  closebtnclass="grey-btn";
  fields=["LastEdited","Status","StartDate","End Date","Remaining", "Requestor's Comments", "Team Members of"];
  maxCharCount = 250;
  charCount = 250;
  window:string;
  
  constructor() { }

  ngOnInit() {
  }
  onkey(event){
    console.log(event.target.value.length);
    this.charCount = this.maxCharCount - (event.target.value.length);
    console.log(this.charCount);
    
  }
  closewindow(){
    
  }
}
