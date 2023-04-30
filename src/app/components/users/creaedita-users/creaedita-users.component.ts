import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import * as moment from 'moment'
import { Users } from 'src/app/model/Users';
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-creaedita-users',
  templateUrl: './creaedita-users.component.html',
  styleUrls: ['./creaedita-users.component.css']
})
export class CreaeditaUsersComponent implements OnInit {


  form:FormGroup= new FormGroup({});
  user:Users= new Users();
  mensaje:string="";
  id: number = 0;
  edicion: boolean=false;
  hide : boolean=true;


  constructor(private as:UsersService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      rol: new FormControl(),
      nombre_completo: new FormControl(),
      correo_electronico: new FormControl(),
      contrasena: new FormControl()
    })
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
    })
  }



  aceptar():void{
    this.user.id=this.form.value['id'];
    this.user.rol=this.form.value['rol'];
    this.user.nombre_completo=this.form.value['nombre_completo'];
    this.user.correo_electronico=this.form.value['correo_electronico'];
    this.user.contrasena=this.form.value['contrasena'];

    if(this.form.value['nombre_completo'].length > 0 && this.form.value['correo_electronico'].length > 0){
      if(this.edicion){
        this.as.update(this.user).subscribe(()=>{
          this.as.list().subscribe(data=>{
            this.as.setList(data)})
        })
      }
      else{
            this.as.insert(this.user).subscribe(data=>{
              this.as.list().subscribe(data=>{
                this.as.setList(data)})})
      }
      this.router.navigate(['users']);
    }
    else{
      this.mensaje = "Ingrese los datos del usurio!!"
    }
  }
  init(){

    if(this.edicion){
      this.as.listId(this.id).subscribe(data=>{
          this.form = new FormGroup({
            id: new FormControl(data.id),
            rol: new  FormControl(data.rol),
            nombre_completo: new FormControl(data.nombre_completo),
            correo_electronico: new FormControl(data.correo_electronico),
            contrasena: new FormControl(data.contrasena)
          })
      })
    }
  }
}
