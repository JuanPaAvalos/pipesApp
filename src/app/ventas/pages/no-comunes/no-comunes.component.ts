import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  //*i18nSelect
  public hombre = {
    nombre: 'Juan',
    genero: 'H',
    edad: 22,
    direccion: "Calle 71 Region 81"
  };

  public Mujer = {
    nombre: 'Katherine',
    genero: 'M',
    edad: 22,
    direccion: "Calle 99 Region 11"

  };

  public persona = this.hombre;

  cambiarGenero() {
    if (this.persona == this.hombre) {
      this.persona = this.Mujer;
    } else {
      this.persona = this.hombre;
    }
  }

  invitacionMap = {
    H: 'invitado',
    M: 'invitada',
  };

  //*i18nPlural
  clientes: string[] = [
    'Maria',
    'Jorge',
    'Saul',
    'Alexis',
    'Katherine',
    'Erick',
    'Issac',
  ];
  clientNumber: number = this.clientes.length;

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clientes.pop();
    console.log('clientNumber ', this.clientNumber);
    console.log('clientes ', this.clientes);
    this.clientNumber = this.clientes.length;
  }

  sumClient() {
    this.clientNumber += 1;
  }

  restClient() {
    this.clientNumber -= 1;
  }

  //*slices
  clientesSlice: string[] = [
    'Maria',
    'Jorge',
    'Saul',
    'Alexis',
    'Katherine',
    'Erick',
    'Issac',
  ];

    //*async
    public myObservable = interval(2000).pipe(
      tap( valor => console.log("tap:", valor)
      )
    );

    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data en la Promesa')
      }, 2000);
    })

  constructor() {}

  ngOnInit(): void {}
}
