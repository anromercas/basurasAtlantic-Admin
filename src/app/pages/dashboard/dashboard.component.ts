import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  hoy = Date();

  // Donas - Media por zona
  public doughnutChartLabels: string[] = ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6', 'Zona 7',
                                          'zona 8 y 9', 'zona 10', 'zona 11'];
  public doughnutChartData: number[] = [2.85, 3.5, 3, 2.5, 3.46, 2.84, 4.44, 4.89, 3.37, 2.28];
  public doughnutChartType = 'doughnut';

  // PolarArea - Media por carga de zona
  public polarAreaChartLabels: string[] = ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6', 'Zona 7',
                                            'zona 8 y 9', 'zona 10', 'zona 11'];
  public polarAreaChartData: number[] = [100, 75, 50, 25, 75, 50, 25, 0, 25, 50];
  public polarAreaLegend = true;
  public polarAreaChartType = 'polarArea';


  public barChartLabels: string[] = ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6', 'Zona 7',
                                      'zona 8 y 9', 'zona 10', 'zona 11'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartData: any[] = [
    {data: [35, 20, 50, 55, 55, 30, 55, 55, 35, 65], label: 'Semana 1'},
    {data: [28, 12, 25, 10, 50, 40, 15, 26, 23, 56], label: 'Semana 2'},
    {data: [15, 10, 19, 46, 16, 30, 25, 28, 16, 48], label: 'Semana 3'},
    {data: [30, 18, 45, 33, 46, 20, 35, 44, 14, 41], label: 'Semana 4'}
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  verFicha() {
    this.router.navigate(['/ficha-contenedor']);
  }

}
