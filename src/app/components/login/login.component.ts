import { Component, OnInit } from '@angular/core';
import { timeOffService } from '../../shared/timeOffService';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginClass: string = "loginBtn red-button";
  loginText: string = "LOGIN";
  loginLabel: any=["Employee ID"];
  data: any=[];
  getEmpInfo: any;
  constructor(private loginService : timeOffService, private router: Router){
      this.loginService.getEmpData().subscribe(data =>{
          this.getEmpInfo = data;
      })
  }
  idTypeList : any= ["Employee ID", "Soc. Sec. # (US only)", "Custom ID"];
  loginUser(data) {
    this.getEmpInfo.map(ele=>{
     (this.data.empId == ele.emp && this.data.pwd == ele.pwd) ? this.router.navigateByUrl('/greenStack'): console.log("Login Failed");
  });
  }
  onSelectList(list){
    this.loginLabel =list;
  }
  onIdSelect(){

  }

}
