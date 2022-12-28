import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-coches-admin',
  templateUrl: './admin-coches.component.html',
  styleUrls: ['./admin-coches.component.css']
})
export class AdminCochesComponent implements OnInit {
  coches: any;

  constructor(private backend: BackendService) { }



  ngOnInit(): void {
    this.getCoches();

  }

  getCoches() {
    this.backend.getCoches().subscribe((coches) => {
      this.coches = coches;
      this.coches.sort((a: any, b: any) => a.combustible.localeCompare(b.combustible));
      console.log(this.coches)
    })
  }

  deleteCoche(coche: any) {
    return this.backend.deleteCoche(coche.id).subscribe(() => {
      Swal.fire({
        title: 'HECHO!',
        text: `${coche.modelo} se ha borrado correctamente !`,
        icon: 'success'
      }).then(() => {
        this.getCoches();
      })

    })

  }

}
