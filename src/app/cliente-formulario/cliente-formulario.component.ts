import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  cliente = {
    nombre: "",
    apellidos: "",
    email: "",
    tel: null
  }
  constructor(private backend: BackendService) { }


  ngOnInit(): void {

  }

  enviarFormulario() {

    return this.backend.mandarFormulario(this.cliente).subscribe(() => {
      Swal.fire(
        'El formulario se ha enviado correctamente !',
        `Te contactaremos lo mas antes posible!`,
        'success'
      )

    })
    console.log(this.cliente);
  }

}
