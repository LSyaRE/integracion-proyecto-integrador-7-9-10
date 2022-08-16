import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../persona/persona.service';
import { Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html'
})
export class RolListComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private personaService: PersonaService
  ) { }

    rolList: Rol[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.rolService.findAll().subscribe(
      (response) => {
        this.rolList = response;
        this.completarNombres();
      }
    )
  }

  //poner un campo de otra tabla
  public completarNombres(): void{
    this.rolList.forEach(
      (rol)=> {
        this.personaService.findById (
          rol.personaId
        ).subscribe(
          (persona)=>{rol.personaNombre=persona.name}
        )
      }
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.rolService.findByName(term).subscribe(
        (response) => this.rolList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }
  }
}
