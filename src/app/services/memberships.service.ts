import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Memberships } from '../model/memberships';
import { HttpClient } from '@angular/common/http';

const base_url= environment.base

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {

  private url=`${base_url}/memberships`
  private listaCambio= new Subject<Memberships[]>();
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Memberships[]>(this.url);
  }

  insert(simulation:Memberships){
    return this.http.post(this.url, simulation);
  }

  setList(ListaNueva: Memberships[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(id: number) {
    return this.http.get<Memberships>(`${this.url}/${id}`);
  }

  update(s: Memberships) {
    return this.http.put(this.url + "/" + s.id, s);
  }
  
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

}
