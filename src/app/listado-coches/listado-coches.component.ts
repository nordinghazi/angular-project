import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent implements OnInit {
  coches: any;
  filtroTipo = 0;
  filtro = "";
  tipoCoches: any;
  cochesFiltrados: any;

  constructor(private backend: BackendService) { }



  ngOnInit(): void {
    this.getCoches();
    this.getTipoCoche();

  }

  getCoches() {

    this.backend.getCoches().subscribe((coches) => {
      this.coches = coches;
      this.cochesFiltrados = coches;
      this.coches.sort((a: any, b: any) => a.combustible.localeCompare(b.combustible));
      console.log(this.coches)
    })
  }


  getTipoCoche() {
    this.backend.getTipoCoche().subscribe((tipoCoches) => {
      this.tipoCoches = tipoCoches;
      console.log(this.tipoCoches)
    })
  }

  filtraTipo() {
    if (this.filtroTipo == 0)
      this.cochesFiltrados = this.coches;
    else
      this.cochesFiltrados = this.coches.filter((coche: any) => {
        return coche.idTipoCoche == this.filtroTipo;
      });

  }

}









