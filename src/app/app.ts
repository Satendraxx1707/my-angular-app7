import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  name: string = "Satendra";
   title = '';
   fun(){

    console.log("hello");
    this.title="hello"
   }
}
