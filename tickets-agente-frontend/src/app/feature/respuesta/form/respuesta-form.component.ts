import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../respuesta.service';
import { Respuesta } from '../respuesta';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../ticket/ticket';
import { Usuario } from '../../usuario/usuario';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-respuesta-form',
  templateUrl: './respuesta-form.component.html',

})
export class RespuestaFormComponent implements OnInit {

  constructor( private respuestaService: RespuestaService,
    private activatedRoute: ActivatedRoute,
    private usuarioService:UsuarioService,
    private router:Router) { }

    currentEntity: Respuesta =
    {
      id: 0,
      comentario: "",
      created: new Date(),
      enabled: true,
      resuelto: false,
      idTicket:0,
      respuestaId:0,
      usuarioId:0,
      usuarios:[]
    };


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )

  }


  save():void {
    console.table(this.currentEntity);
    this.respuestaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
        id: 0,
        comentario: "",
        created: new Date(),
        enabled: true,
        resuelto: false,
        idTicket:0,
        respuestaId:0,
        usuarioId:0,
        usuarios:[]

        };
      }
      )
      this.router.navigate(['/layout/respuesta-list']);
  }

  findById(id: number):void{
    this.respuestaService.findById(id).subscribe( 
      (response)=>{
        this.currentEntity=response;
        this.currentEntity.usuarios.forEach(
          (user)=>{
            this.usuarioService.findById(user.id).subscribe(
              (item)=> user.nombre = item.nombre
            )
            this.currentEntity.usuarios.forEach(

              (user)=>{
                this.usuarioService.findById(user.id).subscribe(
                  (item)=>user.nombre = item.nombre)
                }
                )
              }
              );

      })
  }

  deleteById():void{
    this.respuestaService.deleteById(this.currentEntity.id).subscribe(
      () => {
        this.router.navigate(['/layout/respuesta-list']);

      }
    )
  }

  removeUsuario(id: number){
    this.currentEntity.usuarios =
    this.currentEntity.usuarios.filter(
      (item) => item.id != id
    );
  }

  addUser(user: Usuario){
    user.usuarioId = user.id;
    this.currentEntity.usuarios.push(
      user
    );
  }


}
