import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {


  formularios: any
  constructor(private backend: BackendService) { }



  ngOnInit(): void {

    this.getFormularios();
  }

  getFormularios() {
    return this.backend.getFormularios().subscribe((formularios) => {
      this.formularios = formularios;
      console.log(this.formularios)
    })
  };

  borrarFormulario(formulario: any) {
    this.backend.borrarFormulario(formulario.tel).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Registro Borrado',
        text: `El cliente ${formulario.nombre} ${formulario.apellidos} Se ha borrado correctamente !`
      }).then(() => {

        this.getFormularios();

      });

    });

  }

}


