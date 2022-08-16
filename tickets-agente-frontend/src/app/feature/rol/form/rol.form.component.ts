import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-form',
  templateUrl: './rol.form.component.html'
})
export class RolFormComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  currentEntity: Rol =
  {
    rolId: 0,
    name: "",
    personaId: 0,
    admin: true,
    created: new Date(),
    updated: new Date(),
    personaNombre: ""
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
    this.rolService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          rolId: 0,
          name: "",
          personaId: 0,
          admin: true,
          created: new Date(),
          updated: new Date(),
          personaNombre: ""
        };
        this.router.navigate(['/layout/rol-list'])
      }
    )
  }

  findById(id: number):void {
    this.rolService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }
}
