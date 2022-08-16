import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-respuesta-toolbar',
  templateUrl: './respuesta-toolbar.component.html',
})
export class RespuestaToolbarComponent implements OnInit {
  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
