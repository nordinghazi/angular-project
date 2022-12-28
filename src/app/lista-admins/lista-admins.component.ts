import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-lista-admins',
  templateUrl: './lista-admins.component.html',
  styleUrls: ['./lista-admins.component.css']
})

export class ListaAdminsComponent implements OnInit {
  admins: any



  constructor(private backend: BackendService) { }


  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    return this.backend.getAdmins().subscribe((admins) => {
      this.admins = admins;
      console.log(this.admins)
    })
  }

  borrarAdmin(admin: any) {
    return this.backend.borrarAdmin(admin.id).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Admin Borrado',
        text: `El admin ${admin.email} Se ha borrado correctamente !`
      }).then(() => {

        this.getAdmins();

      });

    });

  }

}











