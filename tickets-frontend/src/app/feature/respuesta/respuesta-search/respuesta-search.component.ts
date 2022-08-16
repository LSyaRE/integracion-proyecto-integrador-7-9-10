import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Respuesta } from '../respuesta';
import {RespuestaService } from '../respuesta.service';

@Component({
  selector: 'app-respuesta-search',
  templateUrl: './respuesta-search.component.html'
})
export class RespuestaSearchComponent implements OnInit {

  constructor(
    private respuestaService: RespuestaService
  ) { }

  respuestas: Respuesta[] = [];

  @Output() respuestaEmitter = new EventEmitter<Respuesta>();

  ngOnInit(): void {
  }

  onInput(term: string):void {
    if (term.length>=2){
      this.respuestaService.findByComentario(term).subscribe(
        (response) => this.respuestas = response
      )
    }
    if (term.length===0){
      this.respuestas = [];
    }

  }

  onSelect(respuesta: Respuesta):void {
    this.respuestaEmitter.emit(respuesta);
  }

}
