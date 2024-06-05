import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public delteHero?: string;

  public heroNames: string[] = ['Spiderman','Ironman','Thor','Hulk'];

  removeLastHero():void {
    this.delteHero = this.heroNames.pop();
  }
}
