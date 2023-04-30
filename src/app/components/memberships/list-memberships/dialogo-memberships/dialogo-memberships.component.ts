import { Component, OnInit } from '@angular/core';
import { MembershipsService } from 'src/app/services/memberships.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-memberships',
  templateUrl: './dialogo-memberships.component.html',
  styleUrls: ['./dialogo-memberships.component.css']
})
export class DialogoMembershipsComponent implements OnInit {

  constructor(private mS: MembershipsService,
    private dialogRef: MatDialogRef<DialogoMembershipsComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.mS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
