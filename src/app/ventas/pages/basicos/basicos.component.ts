import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  public nombrelower: string = "juan pablo";
  public nombreUpper: string = "JUAN PABLO";
  public nombreTitle: string = "JuAn paBLo";

  public fecha: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
