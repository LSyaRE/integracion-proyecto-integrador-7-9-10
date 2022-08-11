import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SugerenciaService } from '../../sugerencia/sugerencia.service';
import { Motivo } from '../motivo';
import { MotivoService } from '../motivo.service';

@Component({
  selector: 'app-motivo-form',
  templateUrl: './motivo-form.component.html'

})
export class MotivoFormComponent implements OnInit {

  constructor(
    private motivoService: MotivoService,
    private activatedRoute: ActivatedRoute,
    private sugerenciaService: SugerenciaService,
    private router: Router

    ) { }

  currentEntity: Motivo =
  {
    motivoId: 0,
    descripcion: "",
    created: new Date(),
    enabled: true,
    archived: false,
    moduloId: 0,
    sugerencias: [],
    moduloNombre: ""
  };




    ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe(
        (params) => {
          if (params.get("id")){
            this.findById(parseInt(params.get("id")!));
          }
        }
      )


  }//ngOnInit

  save():void {
    console.table(this.currentEntity);
    this.motivoService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          motivoId: 0,
          descripcion: "",
          created: new Date(),
          enabled: true,
          archived: false,
          moduloId: 0,
          sugerencias: [],
          moduloNombre: ""
        };
        this.router.navigate(['/layout/motivo-list']);
      }
    )
  }//save

  findById(id: number):void {
    this.motivoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.sugerencias.forEach(
          (auth) => {
            this.sugerenciaService.findById(auth.sugerenciaId).subscribe(
              (item) => auth.sugerenci = item.sugerenci
            )
          }
        )
      }
    )
  }//finById


  deleteById():void{
    this.motivoService.deleteById(this.currentEntity.motivoId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeSugerencia(id: number):void {

    this.currentEntity.sugerencias =
    this.currentEntity.sugerencias.filter(
      (item) => item.sugerenciaId != id
    );
  }


}
