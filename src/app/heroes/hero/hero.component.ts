import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name: string = 'ironman';
 public age: number = 45;

 get capitalizedname():string {
  return this.name.toUpperCase();
 }

 getHeroeDescription():string {
  return `${this.name} - ${this.age}`;
 }

 changeHero():void {
  this.name = 'Spiderman';
 }

 changeAge():void {
  this.age = 25;
 }

 reset():void {
  this.name = 'Ironman';
  this.age = 45;
 }
}



