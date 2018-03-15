import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from './employee-card/shared/employee-data.service';
import { element } from 'protractor';

@Component({
  selector: 'app-approve-request',
  templateUrl: './approve-request.component.html',
  styleUrls: ['./approve-request.component.css'],
  providers:[EmployeeDataService]
})
export class ApproveRequestComponent implements OnInit {

  public cardData=[];
  public employeeTypeList =[];
  constructor(private _EmployeeDataService:EmployeeDataService) { 
    
    this._EmployeeDataService.getEmployeePTOList()
    .subscribe(data=>
      {
        this.cardData = data,
        this.cardData.forEach(element=>{
          this.employeeTypeList.push(element.fullName);
        })
      }, error=>console.log(error));
  }

  ngOnInit() {  
    
  }


}
