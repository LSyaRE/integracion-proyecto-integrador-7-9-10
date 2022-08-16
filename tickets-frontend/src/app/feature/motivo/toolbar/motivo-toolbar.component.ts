import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-motivo-toolbar',
  templateUrl: './motivo-toolbar.component.html',

})
export class MotivoToolbarComponent implements OnInit {

  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
