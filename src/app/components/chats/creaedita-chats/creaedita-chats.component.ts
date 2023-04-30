import { Chats } from 'src/app/model/Chats';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatsService } from 'src/app/services/chats.service';

import * as moment from 'moment';

@Component({
  selector: 'app-creaedita-chats',
  templateUrl: './creaedita-chats.component.html',
  styleUrls: ['./creaedita-chats.component.css']
})
export class CreaeditaChatsComponent implements OnInit {

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  chats: Chats = new Chats();
  mensaje: string = "";

  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor( private cS: ChatsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      mensaje_estudiante: new FormControl(),
      mensaje_tutor: new FormControl(),
      fecha_envio: new FormControl(),
      fecha_recepcion: new FormControl(),
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo
    })
  }

  aceptar(): void {
    const now = moment();
    this.chats.id= this.form.value['id'];
    this.chats.mensaje_estudiante = this.form.value['mensaje_estudiante'];
    this.chats.mensaje_tutor = this.form.value['mensaje_tutor'];
    //this.chats.fecha_envio = this.form.value['fecha_envio'];
    this.chats.fecha_envio = moment().toDate();
    //this.chats.fecha_recepcion = this.form.value['fecha_recepcion'];
    this.chats.fecha_recepcion = moment().toDate();

  //   if (this.form.value['mensaje_estudiante'].length > 0 && this.form.value['mensaje_tutor'].length > 0
  //     && this.form.value['fecha_envio'].length > 0 && this.form.value['fecha_recepcion'].length > 0) {
  //     if(this.edicion){
  //       this.cS.update(this.chats).subscribe(()=>{
  //         this.cS.list().subscribe(data => {
  //         this.cS.setList(data)})
  //       })
  //     }else{
  //       this.cS.insert(this.chats).subscribe(data => {
  //       this.cS.list().subscribe(data => {
  //         this.cS.setList(data)
  //       })
  //     })
  //   }
  //     this.router.navigate(['chats']);

  //   } else {
  //     this.mensaje = "Ingrese los datos de la chats!!"
  //   }
  // }
  if (
    this.form.value['mensaje_estudiante'].length > 0 &&
    this.form.value['mensaje_tutor']
  ) {
    if (this.edicion) {
      this.cS.update(this.chats).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
    } else {
      this.cS.insert(this.chats).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
    }

    this.router.navigate(['chats']);
  } else {
    this.mensaje = 'ingrese los datos del chat';
  }
}
  // para Modificar
  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          mensaje_estudiante: new FormControl(data.mensaje_estudiante),
          mensaje_tutor: new FormControl(data.mensaje_tutor),
          fecha_envio: new FormControl(data.fecha_envio),
          fecha_recepcion: new FormControl(data.fecha_recepcion),
        })
      })
    }
  }
}
