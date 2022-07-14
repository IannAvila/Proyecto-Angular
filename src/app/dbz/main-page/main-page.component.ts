import { Component } from '@angular/core';
import { Personaje } from '../personajes';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevoPersonaje:Personaje[]=
  [
    {
    nombre: "Vegeta",
    poder: 20000
    },
    {
      nombre: "Goku",
      poder: 25000
    },
    {
      nombre: "Krillin",
      poder: 15000
    }
  ];

  nuevo:Personaje={
    nombre:"",
    poder:0
  }

agregar():void{
    this.nuevoPersonaje.push(this.nuevo);
    this.nuevo={
     nombre:"",
     poder:0
    }
}

}
