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

  inputTextEvent(value: any){
    this.inputData = value;
    console.log(this.inputData)
  }
}
