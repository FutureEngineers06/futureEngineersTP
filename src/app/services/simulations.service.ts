import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Simulations } from '../model/simulations';
import { HttpClient } from '@angular/common/http';

const base_url= environment.base

@Injectable({
  providedIn: 'root'
})
export class SimulationsService {

  private url=`${base_url}/simulations`
  private listaCambio= new Subject<Simulations[]>();
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Simulations[]>(this.url);
  }

  insert(simulation:Simulations){
    return this.http.post(this.url, simulation);
  }

  setList(ListaNueva: Simulations[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(id: number) {
    return this.http.get<Simulations>(`${this.url}/${id}`);
  }

  update(s: Simulations) {
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
