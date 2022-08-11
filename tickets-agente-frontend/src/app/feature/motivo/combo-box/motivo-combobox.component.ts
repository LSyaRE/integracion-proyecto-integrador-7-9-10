import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MotivoService } from '../motivo.service';
import { Motivo } from '../motivo';

@Component({
  selector: 'app-motivo-combobox',
  templateUrl: './motivo-combobox.component.html',
})
export class MotivoComboboxComponent implements OnInit {

  constructor(
    private motivoService: MotivoService
  ) { }
motivos: Motivo[] = [];
@Output() motivoIdEmitter = new EventEmitter<number>();
@Input() motivoId: number = 0;
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.motivoService.findAll().subscribe(
      (respose) => this.motivos = respose
    )
  }

  public onSelect(id:string){
    console.log("El id del motivo es:" + id);
    this.motivoIdEmitter.emit(parseInt(id));
  }
}
