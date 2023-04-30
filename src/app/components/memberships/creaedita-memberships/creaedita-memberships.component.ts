import { Component, OnInit } from '@angular/core';
import { Memberships } from 'src/app/model/memberships';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MembershipsService } from 'src/app/services/memberships.service';

@Component({
  selector: 'app-creaedita-memberships',
  templateUrl: './creaedita-memberships.component.html',
  styleUrls: ['./creaedita-memberships.component.css']
})
export class CreaeditaMembershipsComponent implements OnInit {

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  memberships: Memberships = new Memberships();
  mensaje: string = "";

  constructor(private mS: MembershipsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      monto_pago: new FormControl(),
      beneficios: new FormControl(),
      metodo_de_pago: new FormControl(),
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo 
    })
  }

  aceptar(): void {
    this.memberships.id = this.form.value['id'];
    this.memberships.monto_pago = this.form.value['monto_pago'];
    this.memberships.beneficios = this.form.value['beneficios'];
    this.memberships.metodo_de_pago = this.form.value['metodo_de_pago'];

    if (this.form.value['monto_pago'].length > 0 && this.form.value['beneficios'].length > 0
      && this.form.value['metodo_de_pago'].length > 0) {
      if(this.edicion){
        this.mS.update(this.memberships).subscribe(()=>{
          this.mS.list().subscribe(data => {
          this.mS.setList(data)})
        })
      }else{     
        this.mS.insert(this.memberships).subscribe(data => {
        this.mS.list().subscribe(data => {
          this.mS.setList(data)
        })
      })
    }
      this.router.navigate(['memberships']);

    } else {
      this.mensaje = "Ingrese los datos de la membresía!!"
    }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          monto_pago: new FormControl(data.monto_pago),
          beneficios: new FormControl(data.beneficios),
          metodo_de_pago: new FormControl(data.metodo_de_pago),
        })
      })
    }
  }
}
