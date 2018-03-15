import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';


const URL_Menu ='../../../../../assets/json/employee-data.json';
@Injectable()
export class EmployeeDataService {

  constructor(private _http: Http) { }

  getEmployeePTOList():Observable<any>{
    return this._http
               .get(URL_Menu)
               .map((res:any) => res.json());
  }

  handleError = (error: Response) => {
    return Observable.throw(error);
  }

}
