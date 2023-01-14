import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable, take } from 'rxjs';

import { Student } from 'src/app/features/students/student.model';
import { StudentsStateFacade } from '../students/store/students.facade';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  // ----------------------------------------------------------------------------------------------------------------
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: `<div>X: {point.key}</div>`,
      pointFormat: `<div>{series.name}: {point.y}</div>`,
      shared: true,
      useHTML: true,
    },
    series: [{
      name: 'Y',
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
        { y: 216.4, color: '#BF0B23'}, 194.1, 95.6, 54.4],
      type: 'line',
      allowPointSelect: true,
    }]
  }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {} // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false
  // ----------------------------------------------------------------------------------------------------------------

  students: Student[] = [];
  students$: Observable<Student[]> = this.studentService.students$;
  isAllStudentsLoading$: Observable<boolean> = this.studentService.isAllStudentsLoading$;

  constructor(private studentService: StudentsStateFacade) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents();
    this.students$.subscribe(students => this.createChartLine(students));
  }

  private createChartLine(students: Student[]): void {
    let date = new Date();
    const data: any[] = [];

    console.log(this.students);

    for (let i = 0; i < students.length; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([`${date.getDate()}/${date.getMonth() + 1}`, students[i].id]);
    }
    console.log(data);

    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: true,
      },
      yAxis: {
        title: {
          text: null,
        }
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [{
        name: 'Amount',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
          { y: 216.4, color: '#BF0B23'}, 194.1, 95.6, 54.4],
      },
    {
      name: 'new',
      data,
    },],
    } as any);

    // setInterval(() => {
    //   date.setDate(date.getDate() + 1);
    //   chart.series[0].addPoint([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)], true, true);
    // }, 1500);
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
