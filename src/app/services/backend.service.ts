import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, ReplaySubject } from 'rxjs';
// backend 
const SERVER = `http://localhost:8080/`;



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  loginChange$ = new ReplaySubject<boolean>(1);
  constructor(private http:HttpClient) { }
  // métodos para los coches  
  getCoches() {
    return this.http.get(`${SERVER}coche`)
  }
  postCoche(coche: any) {
    return this.http.post(`${SERVER}coche`, coche);
  }

  // Métodos para los tipo-coches

  getTipoCoche() {
    return this.http.get(`${SERVER}tipocoche`)
  }

  deleteCoche(id: number) {
    return this.http.delete(`${SERVER}coche/${id}`)
  }

  // Métodos para los admins 

  getAdmins() {
    return this.http.get(`${SERVER}auth/admins`)
  }

  logearAdmin(admin: any) {
    return this.http.post<{ accessToken: string }>(`${SERVER}auth/login`, admin).pipe(

      map(r => {

        // Guardar r.accessToken en el localStorage
        localStorage.setItem("token", r.accessToken);
        this.loginChange$.next(true);


      })

    );
  }

  postAdmin(admin: any) {
    return this.http.post(`${SERVER}auth/registrar`, admin);
  }

  borrarAdmin(id: number) {
    return this.http.delete(`${SERVER}auth/${id}`)
  }

  borrarAdminPorEmail(email: any) {
    return this.http.delete(`${SERVER}auth/borrar?email=${email}`)
  }

  // Métodos para los formularios de los clientes 


  getFormularios() {
    return this.http.get(`${SERVER}formulario`)
  }


  mandarFormulario(cliente: any) {
    return this.http.post(`${SERVER}formulario`, cliente);
  }

  borrarFormulario(tel: number) {
    return this.http.delete(`${SERVER}formulario/${tel}`)
  }

  getFormularioPorTel(tel: number) {
    return this.http.get(`${SERVER}formulario?tel=${tel}`)
  }

  borrarToken() {

    this.loginChange$.next(false);
    localStorage.removeItem("token")
  }


}
