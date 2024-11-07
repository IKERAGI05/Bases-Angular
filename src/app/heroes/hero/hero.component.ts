import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'spiderman';
  public age: number = 30;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getheroDescription(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
  changeHero(): void {
    this.name = 'ironman';
  }
  changeAge(): void {
    this.age=45;
  }

  resetForm(): void {
    this.name = 'spiderman';
    this.age = 30;
  }
}
