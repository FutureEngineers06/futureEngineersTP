import { Component, OnInit } from '@angular/core';
import { SimulationsService } from 'src/app/services/simulations.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-simulation-dialogo',
  templateUrl: './simulation-dialogo.component.html',
  styleUrls: ['./simulation-dialogo.component.css']
})
export class SimulationDialogoComponent implements OnInit {

  constructor(private aS: SimulationsService,
    private dialogRef: MatDialogRef<SimulationDialogoComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.aS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
