import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = "";
  @Output() inputTextEvent = new EventEmitter<Object>();
  inputText = "";
  inputAge = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sendTextToParent(){
    this.inputTextEvent.emit({name: this.inputText, age: this.inputAge});
  }

}
