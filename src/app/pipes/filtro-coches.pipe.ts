import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCoches'
})
export class FiltroCochesPipe  {

 transform(value: any, args?: any): any {

    if (!value) return null;

    if (!args) return value;

    return value.filter(function (coche: any) {

      return coche.modelo.toLowerCase().includes(args.toLowerCase()) || coche.combustible.toLowerCase().includes(args.toLowerCase());

    });

  }
}