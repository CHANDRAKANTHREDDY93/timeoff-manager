import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import {AgGridModule} from "ag-grid-angular/main";

export function TranslateStaticLoadFactory(http: Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
}

import { AppComponent } from './app.component';
import { GreenStackComponent } from './components/green-stack/green-stack.component';
import { NoEmpComponent } from './components/green-stack/no-emp/no-emp.component';
import { timeOffService } from './shared/timeOffService';
import { ReqComponent } from './components/green-stack/req/req.component';
import { MaxBalComponent } from './components/green-stack/max-bal/max-bal.component';
import { TrendsComponent } from './components/green-stack/trends/trends.component';
import { LoginComponent } from './components/login/login.component';
import { RedButtonComponent } from './components/shared/red-button/red-button.component'; 
import { EmployeeCardComponent } from './components/approve-request/employee-card/employee-card.component';
import { ApproveRequestComponent } from './components/approve-request/approve-request.component';
import { EmployeeDataService } from './components/approve-request/employee-card/shared/employee-data.service';
import { LeaveDataService } from './components/approve-request/leave-data/shared/leave-data.service';
import { SelectoptionsComponent } from './shared/selectoptions/selectoptions.component';
import { LinkTagComponent } from './shared/link-tag/link-tag.component';
import { ListComponent } from './shared/list/list.component';
import { LeaveDataComponent } from './components/approve-request/leave-data/leave-data.component';
import { LeaverequestComponent } from './components/leaverequest/leaverequest.component';
const appRoutes : Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'greenStack', component: GreenStackComponent},
  {path:'approve',component:ApproveRequestComponent},
  {path: '**', component: LoginComponent}
]
@NgModule({ 
  declarations: [
    AppComponent,
    GreenStackComponent,
    NoEmpComponent,
    ReqComponent,
    MaxBalComponent,
    TrendsComponent,
    LoginComponent,
    EmployeeCardComponent,
    RedButtonComponent,
    ApproveRequestComponent,
    SelectoptionsComponent,
    LinkTagComponent,
    ListComponent,
    LeaveDataComponent,
    LeaverequestComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
   AgGridModule.withComponents([]),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateStaticLoadFactory,
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [timeOffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
