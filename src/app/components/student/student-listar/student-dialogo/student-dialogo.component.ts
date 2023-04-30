import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialogo',
  templateUrl: './student-dialogo.component.html',
  styleUrls: ['./student-dialogo.component.css']
})
export class StudentDialogoComponent implements OnInit {

  constructor(private aS: StudentService,
    private dialogRef: MatDialogRef<StudentDialogoComponent>) { }

  ngOnInit(): void {
  }
  
  confirmar(estado: boolean){
    this.aS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
