import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotivoService } from '../../motivo/motivo.service';
import { Modulo } from '../modulo';
import { ModuloService } from '../modulo.service';

@Component({
  selector: 'app-modulo-form',
  templateUrl: './modulo-form.component.html',
})

export class ModuloFormComponent implements OnInit {

  constructor(
    private moduloService: ModuloService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private motivoService: MotivoService,

  ) { }

  currentEntity: Modulo =
  {
    moduloId: 0,
    name: "",
    url: "",
    created: new Date(),
    updated: new Date(),
    enabled: true,
    rolId: 0,
    motivos: []
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
    this.moduloService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          moduloId: 0,
          name: "",
          url: "",
          created: new Date(),
          updated: new Date(),
          enabled: true,
          rolId: 0,
          motivos: []
        };
      }
    )
  }

  findById(id: number):void {
    this.moduloService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.motivos.forEach(
          (auth) => {
            this.motivoService.findById(auth.motivoId).subscribe(
              (item) => auth.descripcion = item.descripcion
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.moduloService.deleteById(this.currentEntity.moduloId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeMotivo(id: number):void {

    this.currentEntity.motivos =
    this.currentEntity.motivos.filter(
      (item) => item.motivoId != id 
    );
  }

}
