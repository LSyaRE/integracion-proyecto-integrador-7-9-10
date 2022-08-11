import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../../modulo/modulo.service';
import { Motivo } from '../motivo';
import { MotivoService } from '../motivo.service';

@Component({
  selector: 'app-motivo-list',
  templateUrl: './motivo-list.component.html',

})
export class MotivoListComponent implements OnInit {

  constructor(

    private motivoService: MotivoService,
    private moduloService: ModuloService
  ) { }


  motivoList: Motivo[] = [];

  ngOnInit(): void {
    this.findAll();
  }


  public findAll():void {
    this.motivoService.findAll().subscribe(
      (response) => {
        this.motivoList = response
        this.completarNombre();
      }
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.motivoService.findByName(term).subscribe(
        (response) => this.motivoList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }//find by name

  public completarNombre():void{
    this.motivoList.forEach(
      (motivo)=>{
        this.moduloService.findById(
          motivo.moduloId
        ).subscribe(
          (modulo)=>motivo.moduloNombre=modulo.name
        )
      }
    )
  }
}
