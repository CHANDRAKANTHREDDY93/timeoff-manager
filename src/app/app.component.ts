import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService){
  translate.setDefaultLang(navigator.language);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use(navigator.language);
  }
}
