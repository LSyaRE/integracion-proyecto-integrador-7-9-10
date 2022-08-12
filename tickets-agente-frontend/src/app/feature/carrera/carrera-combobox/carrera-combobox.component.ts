import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { carrera } from '../carrera';
import { carreraService } from '../carrera.service';


@Component({
  selector: 'app-carrera-combobox',
  templateUrl: './carrera-combobox.component.html'
})
export class CarreraComboboxComponent implements OnInit {

  constructor(
    private carreraServices: carreraService
  ) { }

  race: carrera[]= [];
  @Output() carreraEmitter = new EventEmitter<number>();
  @Input() carreraId: number= 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.carreraServices.findAll().subscribe(
      (response) => this.race =response
    )

  }

  public onSelect(id:string){
    this.carreraEmitter.emit(parseInt(id));
  }

}
