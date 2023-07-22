import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  public isUpperCase: boolean = false

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
