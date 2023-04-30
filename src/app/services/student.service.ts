import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../model/student';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = `${environment.base}/students`
  private listaCambio= new Subject<Students[]>();
  private confirmarEliminacion = new Subject<Boolean>()
  
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Students[]>(this.url);
  }

  insert(student:Students){
    return this.http.post(this.url, student)
  }

  setList(ListaNueva: Students[]){
    this.listaCambio.next(ListaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  //modificar put
  listId(id: number) {
    return this.http.get<Students>(`${this.url}/${id}`);
  }

  update(s: Students) {
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
