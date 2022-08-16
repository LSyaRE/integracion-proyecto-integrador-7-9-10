import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../ticket/ticket';
import { TicketService } from '../../ticket/ticket.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario.form.component.html',
})
export class UsuarioFormComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private ticketService: TicketService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  currentEntity: Usuario = {
    id: 0,
    nombre: "",
    correo:"",
    password:"",
    enabled: true,
    carreraId: 0,
    usrtickets: [],
    usuarioId:0
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        if(params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save(): void{
    this.usuarioService.save(this.currentEntity)
    .subscribe(
      ()=>{
        this.currentEntity = {
          id: 0,
          nombre: "",
          correo:"",
          password:"",
          enabled: true,
          carreraId: 0,
          usrtickets: [],
          usuarioId:0
        };
        this.router.navigate(['/layout/usuario-list']);
      }
    )
  }

  findById(id: number): void{
    this.usuarioService.findById(id).subscribe(
      (response)=>{
        this.currentEntity = response;
        this.currentEntity.usrtickets.forEach(
          (ursTk) => {
            this.ticketService.findById(ursTk.id).subscribe(
              (item) => ursTk.description = item.description
            )
          }
        )
      }
    )
  }

  deleteById():void{
    console.log("Borrando..");
    this.usuarioService.deleteById(this.currentEntity.id).subscribe(
      ()=>{
        console.log("borrado");
        this.currentEntity = {
          id: 0,
          nombre: "",
          correo:"",
          password:"",
          enabled: true,
          carreraId: 0,
          usrtickets: [],
          usuarioId:0
        };
      }
    )
  }

  removeTicket(id: number): void{
    this.currentEntity.usrtickets =
    this.currentEntity.usrtickets.filter(
      (item) => item.id != id
    );
  }

  addTicket(ticket: Ticket){
    ticket.ticketId = ticket.id;
    this.currentEntity.usrtickets.push(
      ticket
    );
  }

}
