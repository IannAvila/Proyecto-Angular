import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes:string[]=['Spiderma','Ironman','Thor','Hulk','Capitan America','AntMan']
heroesBorrados:string[]=[];
heroeBorrado:string|undefined;

borrarHeroe():void{
  //this.heroes.pop();
  this.heroeBorrado = this.heroes.shift();
  this.heroesBorrados.push(String(this.heroeBorrado));
}

}
