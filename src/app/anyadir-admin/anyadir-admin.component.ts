import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-anyadir-admin',
  templateUrl: './anyadir-admin.component.html',
  styleUrls: ['./anyadir-admin.component.css']
})
export class AnyadirAdminComponent implements OnInit {

  admin = {
    email: "",
    password: ""
  }
  constructor(private backend: BackendService) { }
  ngOnInit(): void {

  }

  postAdmin() {
    this.backend.postAdmin(this.admin).subscribe(() => {
      Swal.fire(
        'HECHO!',
        `${this.admin.email} se ha añadido el coche correctamente !`,
        'success'
      )

    })
    console.log(this.admin);
  }



}
