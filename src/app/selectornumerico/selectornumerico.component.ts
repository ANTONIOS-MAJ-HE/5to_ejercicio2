import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent {
  @Input()
  minimo!: number;
  @Input()
  maximo!: number;
  actual!: number;
  xonstructor(){}
  ngOnInit(){
    this.actual = this.minimo
  }
  incrementar(){
    if (this.actual < this.maximo)
    this.actual++;
  }
  decremntar(){
    if(this.actual>this.minimo)
    this.actual--;
  }
  fijar(v:number){
    if(v>=this.minimo && v<=this.maximo)
    this.actual=v;
  }
}
