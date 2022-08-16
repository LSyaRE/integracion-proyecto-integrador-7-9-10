import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
})
export class UsuarioListComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  usuarioList: Usuario[] = [];

  ngOnInit(): void {
    this.findAll();

  }

  public findAll(): void {
    this.usuarioService.findAll().subscribe(
      (response) => this.usuarioList = response
    )
  }

  public findByNombre(term: string): void{
    if (term.length>=2){
      this.usuarioService.findByNombre(term).subscribe(
        (response) => this.usuarioList = response
      )
    }
    if(term.length ==0){
      this.findAll();
    }
  }

}
