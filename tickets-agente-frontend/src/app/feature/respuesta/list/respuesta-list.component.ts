import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../respuesta';
import { RespuestaService } from '../respuesta.service';

@Component({
  selector: 'app-respuesta-list',
  templateUrl: './respuesta-list.component.html',
})
export class RespuestaListComponent implements OnInit {

  constructor(
    private respuestaService: RespuestaService
  ) { }

  respuestaList: Respuesta[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.respuestaService.findAll().subscribe(
      (response) => this.respuestaList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.respuestaService.findByComentario(term).subscribe(
        (response) => this.respuestaList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }
  }


