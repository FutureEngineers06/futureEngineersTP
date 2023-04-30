import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';
import { DialogoUsersComponent } from './dialogo-users/dialogo-users.component';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {

  lista: Users[] = []
  dataSource:MatTableDataSource<Users>=new MatTableDataSource();//creo q  no se instalo bien el angular material
  idMayor: number = 0
  displayedColumns:String[]=['codigo','rol','nombre_completo','correo_electronico','editar', 'eliminar']
  @ViewChild(MatPaginator,  {static: true}) paginator!: MatPaginator;

  constructor(private as:UsersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.as.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.as.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
  })
  this.as.getConfirmDelete().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  })
}
confirm(id: number) {
  this.idMayor = id;
  this.dialog.open(DialogoUsersComponent);
}
eliminar(id: number) {
  this.as.delete(id).subscribe(() => {
    this.as.list().subscribe(data => {
      this.as.setList(data);
    })
  })
}
filtrar(z:any){
  this.dataSource.filter = z.target.value.trim();
}
}
