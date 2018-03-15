import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-link-tag',
  templateUrl: './link-tag.component.html',
  styleUrls: ['./link-tag.component.css']
})
export class LinkTagComponent implements OnInit {

  public selectedItem;
  @Input() tagData;
  @Output() linkChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.linkChanged.emit("pending");
    this.selectedItem = "Approved";
  }

  linkSelected(link:string){
    this.linkChanged.emit(link);
    this.selectedItem = link;
  }


}
