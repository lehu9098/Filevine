import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  placeholder = "Leo's App";
  inputData: any = null;
  numbers = [5, 12, 8, 130, 44];
  data: any = null;
  currentStyles = {
    "font-size" : '25px'
  }

  ngOnInit(){
    this.numbers.sort((a, b) => a - b);
  }


  inputTextEvent(value: any){
    this.inputData = value;
    console.log(this.inputData)
  }

  populateApiData(data: any){
    this.data = data;
  }



}
