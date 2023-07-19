import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {


  //*i18nSelect
  // public personas = [
  //   {
  //    nombre : "Juan Avalos",
  //    genero : "H",
  //   },
  //   {
  //      nombre : "Mariana",
  //      genero : "M",
  //   }
  // ]

  public persona = {
    nombre: "Juan",
    genero: "H"
  }

  cambiarGenero(){
    this.persona.nombre = "Katherine";
    this.persona.genero = "M";
  }

  
  invitacionMap = {
    'H':'invitado',
    'M': 'invitada',
  }

  //*i18nPlural
  clientes : string[] = ['Maria','Jorge','Saul','Alexis','Katherine','Erick','Issac',]
  clientNumber: number = this.clientes.length;

  clientesMap= {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(){
    this.clientes.pop();
    console.log("clientNumber ", this.clientNumber);
    console.log("clientes ", this.clientes);
    this.clientNumber = this.clientes.length;
  }

  sumClient(){
    this.clientNumber += 1 ;
  }

  restClient(){
    this.clientNumber -= 1 ;
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
