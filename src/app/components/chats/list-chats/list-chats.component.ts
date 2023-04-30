import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chats } from 'src/app/model/Chats';
import { ChatsService } from 'src/app/services/chats.service';
import { MatDialog } from '@angular/material/dialog'
import { DialogoChatsComponent } from './dialogo-chats/dialogo-chats.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.css']
})
export class ListChatsComponent implements OnInit {

  dataSource:MatTableDataSource<Chats>=new MatTableDataSource();//creo q  no se instalo bien el angular material
  displayedColumns:String[]=['Codigo','Mensajedelalumno','Mensajedeltutor','fechadeenvio','fechaderecepcion', 'accions1', 'accions2']
  lista: Chats[]=[]
  idMayor: number=0
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;
  constructor(private as:ChatsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.as.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.as.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    //eliminar
    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoChatsComponent);
  }

  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }


  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }
}


