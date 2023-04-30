import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chats } from '../model/Chats';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private url = `${base_url}/chats`;
  private listaCambio= new Subject<Chats[]>();
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Chats[]>(this.url);
  }

  
  insert(simulation:Chats){
    return this.http.post(this.url, simulation);
  }

  setList(ListaNueva: Chats[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(id: number) {
    return this.http.get<Chats>(`${this.url}/${id}`);
  }

  update(c: Chats) {
    return this.http.put(this.url + "/" + c.id, c);
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
