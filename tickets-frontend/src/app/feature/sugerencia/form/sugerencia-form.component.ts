import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sugerencia } from '../sugerencia';
import { SugerenciaService } from '../sugerencia.service';
@Component({
  selector: 'app-sugerencia-form',
  templateUrl: './sugerencia-form.component.html'
})
export class SugerenciaFormComponent implements OnInit {

  constructor(
    private sugerenciaService: SugerenciaService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  currentEntity: Sugerencia =
  {
    sugerenciaId: 0,
    motivoId: 0,
    sugerenci: "",
    created: new Date(),
    updated: new Date(),
    enable: true,
    motivoNombre: ""
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
    this.sugerenciaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          sugerenciaId: 0,
    motivoId: 0,
    sugerenci: "",
    created: new Date(),
    updated: new Date(),
    enable: true,
    motivoNombre: ""
        };
        this.router.navigate(['/layout/sugerencia-list']);
      }
    )
  }

  findById(id: number):void {
    this.sugerenciaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.sugerenciaService.deleteById(this.currentEntity.sugerenciaId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }
}

