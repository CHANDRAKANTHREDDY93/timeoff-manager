import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


const URL_Menu ='../../../../../assets/json/employeeAccuralHistory.json';
const URL_Data ='../../../../../assets/json/headers.json';
@Injectable()
export class LeaveDataService {

 
  constructor(private _http: HttpClient) { }

  getEmployeePTOleavesList():Observable<any>{
    return this._http
               .get(URL_Menu);
  }

  getHeaders():Observable<any>{
    return this._http
              .get(URL_Data);
  }
  handleError = (error: Response) => {
    return Observable.throw(error);
  }
}
