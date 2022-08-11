import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-search',
  templateUrl: './rol-search.component.html',
})
export class RolSearchComponent implements OnInit {

  constructor(
    private rolService: RolService
  ) { }
roles: Rol[] = [];
@Output() rolEmitter = new EventEmitter<Rol>();
  ngOnInit(): void {
  }
  onInput(term: string):void {
    if (term.length>=2){
      this.rolService.findByName(term).subscribe(
        (response) => this.roles = response
      )
    }
    if (term.length===0){
      this.roles = [];
    }

  }

  onSelect(rol: Rol):void {
    this.rolEmitter.emit(rol);
  }
}
