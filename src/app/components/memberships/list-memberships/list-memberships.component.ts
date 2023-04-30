import { Component, OnInit, ViewChild } from '@angular/core';
import { Memberships } from 'src/app/model/memberships';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MembershipsService } from 'src/app/services/memberships.service';
import { DialogoMembershipsComponent } from './dialogo-memberships/dialogo-memberships.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-memberships',
  templateUrl: './list-memberships.component.html',
  styleUrls: ['./list-memberships.component.css']
})
export class ListMembershipsComponent implements OnInit {

  idMayor: number=0
  lista: Memberships[] = []
  dataSource: MatTableDataSource<Memberships> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'montoPago', 'beneficios', 'metodoPago', 'accions1', 'accions2'];
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;
  constructor(private as: MembershipsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.as.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.as.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    //eliminar
    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoMembershipsComponent);
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
