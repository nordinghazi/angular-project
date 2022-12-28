import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  admin = {
    email: "",
    password: ""
  }
  constructor(private backend: BackendService, private router: Router,) { }
  ngOnInit(): void {

  }

  postAdmin() {
    this.backend.logearAdmin(this.admin).subscribe((admin) => {
      Swal.fire(
        'HECHO!',
        `${this.admin.email} Bienvenido !`,
        'success'
      )

      this.router.navigate(['/admins']);
    })
    console.log(this.admin);
  }

  logoutAdmin() {
    this.backend.borrarToken();
  }





}
