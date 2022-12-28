import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario-coche',
  templateUrl: './formulario-coche.component.html',
  styleUrls: ['./formulario-coche.component.css']
})
export class FormularioCocheComponent implements OnInit {
  tiposcoche: any;
  coche = {
    tipoCoche: null,
    modelo: "",
    combustible: "",
    potencia: null,
    precio: null
  }
  constructor(private backend: BackendService) { }
  ngOnInit(): void {

    this.backend.getTipoCoche().subscribe((tiposcoche) => {
      this.tiposcoche = tiposcoche;
      console.log(this.tiposcoche)
    })

  }
  postCoche() {
    this.backend.postCoche(this.coche).subscribe(() => {
      Swal.fire(
        'HECHO!',
        `${this.coche.modelo} se ha añadido el coche correctamente !`,
        'success'
      )

    })
    console.log(this.coche);
  }

}
