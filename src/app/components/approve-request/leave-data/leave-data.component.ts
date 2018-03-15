import { Component, OnInit } from '@angular/core';
import { GridOptions} from 'ag-grid/main';

import {LeaveDataService} from '../leave-data/shared/leave-data.service';
import { element } from 'protractor';
import { log } from 'util';

@Component({
  selector: 'app-leave-data',
  templateUrl: './leave-data.component.html',
  styleUrls: ['./leave-data.component.css'],
  providers:[LeaveDataService]
})
export class LeaveDataComponent implements OnInit {
  private gridOptions: GridOptions;
  public approvedLeaveData =[];
  public pendingLeaveData =[];
  public declinedLeaveData=[];
  public processedLeaveData=[];
  public tagData;
  public leaveDataResult=[];
  public enableApprove:boolean= false;
  columnDefs;
  rowData:any=[];
  private rowSelection;
  public approveBtn:boolean =false;
  constructor(private _LeaveDataService: LeaveDataService) {
    this.gridOptions = <GridOptions>{headerHeight: 30};
          this.columnDefs = [{
            headerName:"Name",
            field:"Name",
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true
          },
          {
            headerName: "Start Date",
            field: "Start Date",
            width:180
          },
          {
            headerName: "End date",
            field: "End date",
            width:180
          },
          {
              headerName: "Stauts",
              field: "Status",
              width:180
          },
          {
            headerName: "Type",
            field: "Type",
            width:200
          },
          {
            headerName: "Total Hours ",            
            field: "Total Hours",
            width:180
          }];
          
          this.gridOptions.rowStyle = {background: 'white'};
          this.gridOptions.rowClass = 'directory-class';
          this.rowSelection = "multiple";
          this._LeaveDataService.getEmployeePTOleavesList()
              .subscribe(data =>{
                this.leaveDataResult = data,
                this.leaveDataResult.forEach(element=>{
                  (element.leaveStatus ==="Approved")?this.approvedLeaveData.push(element):((element.leaveStatus ==="Pending")?this.pendingLeaveData.push(element):((element.leaveStatus ==="Declined")?this.declinedLeaveData.push(element):this.processedLeaveData.push(element)));
                }),
                this.rowData = this.approvedLeaveData;
                this.approveBtn = false;
              })
          this.gridOptions.getRowStyle = function(params) {
            if (params.node.rowIndex % 2 != 0) {
              return { background : '#e3e3e3' }
           }
          }
        }
       ngOnInit() {
        this._LeaveDataService.getHeaders()
        .subscribe(data =>{
          this.tagData = data;
        })
        }
    onGridReady(params) {
      params.api.sizeColumnsToFit();  
    }
  
    selectAllRows() {
      this.gridOptions.api.selectAll();
    }

    linkChangedHandler(link:string){
      (link ==="Approved")?(this.rowData = this.approvedLeaveData,this.approveBtn=false):((link ==="Pending")?(this.rowData = this.pendingLeaveData,this.approveBtn=true):((link ==="Declined")?(this.rowData = this.declinedLeaveData,this.approveBtn=false):(this.rowData = this.processedLeaveData,this.approveBtn=false)));

    }

}
