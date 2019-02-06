import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficoBasuras: any = {
    'grafico1': {
      'labels': ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      'data': [
        {data: [5, 4, 3, 4], label: 'Contenedor EPIs (P)'},
        {data: [5, 3, 1, 4], label: 'Contenedor Mezcla (P)'},
        {data: [4, 5, 3, 1], label: 'Contenedor Papel y cartón (G)'},
        {data: [1, 4, 5, 3], label: 'Contenedor RSU (P)'},
        {data: [4, 1, 3, 5], label: 'Contenedor de plástico/envases contaminados (P)'},
        {data: [5, 2, 3, 5], label: 'Contenedor de plástico/envases no contaminados (P)'},
        {data: [2, 5, 3, 0], label: 'Cuba chatarra'},
      ],
      'leyenda': 'Zona 1'
    },
    'grafico2': {
      'labels': ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      'data': [
        {data: [5, 4, 3, 4], label: 'Contenedor EPIs (P)'},
        {data: [5, 3, 1, 4], label: 'Contenedor Mezcla (P)'},
        {data: [4, 5, 3, 1], label: 'Contenedor Papel y cartón (G)'},
        {data: [1, 4, 5, 3], label: 'Contenedor RSU (P)'},
        {data: [4, 1, 3, 5], label: 'Contenedor de plástico/envases contaminados (P)'},
        {data: [5, 2, 3, 5], label: 'Contenedor de plástico/envases no contaminados (P)'},
        {data: [2, 5, 3, 0], label: 'Cuba chatarra'},
      ],
      'leyenda': 'Zona 2'
    },
    'grafico3': {
      'labels': ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      'data': [
        {data: [5, 4, 3, 4], label: 'Contenedor EPIs (P)'},
        {data: [5, 3, 1, 4], label: 'Contenedor Mezcla (P)'},
        {data: [4, 5, 3, 1], label: 'Contenedor Papel y cartón (G)'},
        {data: [1, 4, 5, 3], label: 'Contenedor RSU (P)'},
        {data: [4, 1, 3, 5], label: 'Contenedor de plástico/envases contaminados (P)'},
        {data: [5, 2, 3, 5], label: 'Contenedor de plástico/envases no contaminados (P)'},
        {data: [2, 5, 3, 0], label: 'Cuba chatarra'},
      ],
      'leyenda': 'Zona 3'
    },
    'grafico4': {
      'labels': ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      'data': [
        {data: [5, 4, 3, 4], label: 'Contenedor EPIs (P)'},
        {data: [5, 3, 1, 4], label: 'Contenedor Mezcla (P)'},
        {data: [4, 5, 3, 1], label: 'Contenedor Papel y cartón (G)'},
        {data: [1, 4, 5, 3], label: 'Contenedor RSU (P)'},
        {data: [4, 1, 3, 5], label: 'Contenedor de plástico/envases contaminados (P)'},
        {data: [5, 2, 3, 5], label: 'Contenedor de plástico/envases no contaminados (P)'},
        {data: [2, 5, 3, 0], label: 'Cuba chatarra'},
      ],
      'leyenda': 'Zona 4'
    },
  };

  public chartsConfig: any[] = [];
  items: Observable<any>;


  constructor( public graficasService: GraficasService ) {
    this.chartsConfig =
    Object.keys(this.graficoBasuras).map( item => {
      return this.graficoBasuras[item];
    });
  //  console.log(graficasService.dameBasuras());
    this.items = graficasService.dameBasuras();
  }

  ngOnInit() {
  }


}
