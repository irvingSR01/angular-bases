import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = Math.trunc(Math.random() * 100);
  }

  resetPersonalInformation(): void {
    this.name = 'Ironman';
    this.age = 45;
    document.querySelector('h1')!.innerHTML = 'Cambiaste los valores!';
  }

}
