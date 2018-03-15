import { Component, OnInit, Input } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
@Component({
  selector: 'app-red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.css']
})
export class RedButtonComponent implements OnInit {

  @Input() public buttonText: string;

  @Input() public buttonclass: string;
  
  constructor() { }

  ngOnInit() {
  }

}
