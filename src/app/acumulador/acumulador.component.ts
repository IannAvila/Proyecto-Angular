import { Component } from "@angular/core";

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html'
})

export class AcumuladorComponent{
  titulo:string='contador';
  numero:number=10;
  base:number=2;

  sumar():void{
    this.numero=this.numero+1
  }
  restar():void{
    this.numero=this.numero-1
  }

  acumulador(valor:number){
    this.numero +=valor;
  }

}
