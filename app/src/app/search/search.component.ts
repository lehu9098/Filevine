import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = "";
  @Output() inputTextEvent = new EventEmitter<Object>();
  @Output() apiData = new EventEmitter<Object>();
  data: any;
  inputText = "";
  inputAge: number = 0;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
  }

  getData(){
    this._dataService.getData(this.inputAge).subscribe((x) => {
      this.data = x;
    })
  }

  sendTextToParent(){
    this.inputTextEvent.emit({name: this.inputText, age: this.inputAge});
    this.apiData.emit(this.data)
  }

}
