import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usuario-toolbar',
  templateUrl: './usuario-toolbar.component.html'
})
export class UsuarioToolbarComponent implements OnInit {

  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
