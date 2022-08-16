import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { carrera } from '../carrera';
import { carreraService } from '../carrera.service';

@Component({
  selector: 'app-carrera-ticket-combobox',
  templateUrl: './carrera-ticket-combobox.component.html'
})
export class carreraTicketComboboxComponent implements OnInit {

  constructor(
    private carreraService: carreraService
  ) { }

  carreras: carrera[] = [];
  @Output() carreraIdEmitter = new EventEmitter<number>();
  @Input() carreraId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.carreraService.findAll().subscribe(
      (respose) => this.carreras = respose
    )
  }

  public onSelect(id:string){
    console.log("El id de la carrera es:" + id);
    this.carreraIdEmitter.emit(parseInt(id));
  }

}
