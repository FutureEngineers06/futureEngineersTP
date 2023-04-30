import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/services/chats.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-chats',
  templateUrl: './dialogo-chats.component.html',
  styleUrls: ['./dialogo-chats.component.css']
})
export class DialogoChatsComponent implements OnInit {

  constructor(private cS: ChatsService, private dialogRef: MatDialogRef<DialogoChatsComponent> ) { }

  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.cS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
