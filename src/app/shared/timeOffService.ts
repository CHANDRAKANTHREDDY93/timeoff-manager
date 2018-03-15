import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class timeOffService{
    constructor(private http: HttpClient){  }

    getDate(){
        return this.http.get("../assets/json/common.json");
    }
    getEmpData(){
        return this.http.get("../assets/json/empData.json");
    }
}