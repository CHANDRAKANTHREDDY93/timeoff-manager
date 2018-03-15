import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selectoptions',
  templateUrl: './selectoptions.component.html',
  styleUrls: ['./selectoptions.component.css']
})
export class SelectoptionsComponent implements OnInit {
  leaveType:string;
  @Input() leaveTypeList;
  @Output() selectedLeaveType = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    this.selectedLeaveType.emit(this.leaveType);
  }

}
