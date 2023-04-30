import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-users',
  templateUrl: './dialogo-users.component.html',
  styleUrls: ['./dialogo-users.component.css']
})
export class DialogoUsersComponent implements OnInit {

  constructor(private as: UsersService,
    private dialogRef: MatDialogRef<DialogoUsersComponent>) { }

  ngOnInit(): void {}

  confirmar(estado: Boolean){
    this.as.setConfirmDelete(estado);
    this.dialogRef.close();
  }

}
