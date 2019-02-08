import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: []
})
export class GraficoBarrasComponent implements OnInit {

  @Input('chartConfig') chartConfig: any = {};

 // @Input() graficos: any;
 /* barChartLabels: string[] = [ 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4' ]; */
 /*  barChartData: any[] = [
     {data: [5, 4, 3, 4], label: 'Contenedor EPIs (P)'},
    {data: [5, 3, 1, 4], label: 'Contenedor Mezcla (P)'},
    {data: [4, 5, 3, 1], label: 'Contenedor Papel y cartón (G)'},
    {data: [1, 4, 5, 3], label: 'Contenedor RSU (P)'},
    {data: [4, 1, 3, 5], label: 'Contenedor de plástico/envases contaminados (P)'},
    {data: [5, 2, 3, 5], label: 'Contenedor de plástico/envases no contaminados (P)'},
    {data: [2, 5, 3, 0], label: 'Cuba chatarra'}
  ]; */

  barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  barChartType = 'bar';
  barChartLegend = true;


  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
