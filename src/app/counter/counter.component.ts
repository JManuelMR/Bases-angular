import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>{{counter}}</h3>

  <button (click)="increasBy(1)">Mas 1</button>
  <button (click)="restablecer()">Restablecer</button>
  <button (click)="increasBy(-1)">Menos 1</button>
  `
})

export class CounterComponent {
  title = 'Hola Mundo';
  counter = 10;

  restablecer(): void {
    this.counter = 10;
  }


  increasBy(value:number):void {
    this.counter += value;
  }
}
