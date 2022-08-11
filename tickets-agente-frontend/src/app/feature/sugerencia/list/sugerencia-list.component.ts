import { Component, OnInit } from '@angular/core';
import { MotivoService } from '../../motivo/motivo.service';
import { Sugerencia } from '../sugerencia';
import { SugerenciaService } from '../sugerencia.service';
@Component({
  selector: 'app-sugerencia-list',
  templateUrl: './sugerencia-list.component.html'
})
export class SugerenciaListComponent implements OnInit {

  constructor(
    private sugerenciaService: SugerenciaService,
    private motivoService: MotivoService
  ) { }

  sugerenciaList: Sugerencia[] = [];
  ngOnInit(): void {
    this.findAll();
  }
public findAll():void {
  this.sugerenciaService.findAll().subscribe(
    (response) => {this.sugerenciaList = response
      this.completarNombre();
    }
  )
}
public findByName(term: string): void{
  if(term.length>=2){
    this.sugerenciaService.findByName(term).subscribe(
      (response) => this.sugerenciaList = response
    )
  }
  if (term.length===0){
    this.findAll();
  }
}
public completarNombre():void{
  this.sugerenciaList.forEach(
    (sugerencia)=>{
      this.motivoService.findById(
        sugerencia.motivoId
      ).subscribe(
        (motivo)=>sugerencia.motivoNombre=motivo.descripcion
      )
    }
  )
}
}
