import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo';
  counter = 10;

  restablecer(): void {
    this.counter = 10;
  }


  increasBy(value:number):void {
    this.counter += value;
  }

  // increasBy():void {
  //   this.counter += 1;
  // }

  // decrementBy():void {
  //   this.counter -= 1;
  // }



}
