import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../model/Users';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = `${base_url}/users`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Users[]>()
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Users[]>(this.url);
  }
  insert(user:Users){
    return this.http.post(this.url, user);
  }
  setList(listaNueva:Users[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id : number){
    return this.http.get<Users>(`${this.url}/${id}`);
  }
  update(a: Users){
    return this.http.put(this.url+"/"+a.id, a);
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
