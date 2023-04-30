import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Simulations } from 'src/app/model/simulations';
import { SimulationsService } from 'src/app/services/simulations.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-simulation-creaedita',
  templateUrl: './simulation-creaedita.component.html',
  styleUrls: ['./simulation-creaedita.component.css']
})
export class SimulationCreaeditaComponent implements OnInit {

  id: number=0;
  edicion: boolean=false;
  form: FormGroup = new FormGroup({});
  simulation: Simulations = new Simulations();
  mensaje: string = "";

  constructor(private aS: SimulationsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      nameCurso: new FormControl(),
      planCurso: new FormControl(),
      metodologiaCurso: new FormControl(),
      duracionHoras: new FormControl(),
    })

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();  //traer el componente de abajo 
    })
  }

  aceptar(): void {
    this.simulation.id = this.form.value['id'];
    this.simulation.nameCurso = this.form.value['nameCurso'];
    this.simulation.planCurso = this.form.value['planCurso'];
    this.simulation.metodologiaCurso = this.form.value['metodologiaCurso'];
    this.simulation.duracionHoras = this.form.value['duracionHoras'];

    if (this.form.value['nameCurso'].length > 0 && this.form.value['planCurso'].length > 0
      && this.form.value['metodologiaCurso'].length > 0 && this.form.value['duracionHoras'].length > 0) {
      if(this.edicion){
        this.aS.update(this.simulation).subscribe(()=>{
          this.aS.list().subscribe(data => {
          this.aS.setList(data)})
        })
      }else{     
        this.aS.insert(this.simulation).subscribe(data => {
        this.aS.list().subscribe(data => {
          this.aS.setList(data)
        })
      })
    }
      this.router.navigate(['simulations']);

    } else {
      this.mensaje = "Ingrese los datos de la simulación!!"
    }
  }
  // para Modificar
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameCurso: new FormControl(data.nameCurso),
          planCurso: new FormControl(data.planCurso),
          metodologiaCurso: new FormControl(data.metodologiaCurso),
          duracionHoras: new FormControl(data.duracionHoras)
        })
      })
    }
  }
}
