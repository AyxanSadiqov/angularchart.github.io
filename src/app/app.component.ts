import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // legends1 = [{
  //   title: "Gross Domestic Product, B",
  //   items : [{ id: 1, name: "Other" },
  //     { id: 2, name: "ItAndTelecom" },
  //     { id: 3, name: "Per capita" },
  //     { id: 4, name: "Agriculture" },
  //     { id: 5, name: "Construction" },
  //     { id: 6, name: "Non-oil" }
  //   ]
  // }]

  barChartLabel1 = ['2019', '2020', '2021', '2022']
  barChartLabel2 = ['Sep-2019', 'Sep-2020', 'Sep-2021', 'Sep-2022']

  // Scroll at the same time
  currentElement: string | undefined;
  @ViewChild('scrollOne') scrollOne!: ElementRef;
  @ViewChild('scrollTwo') scrollTwo!: ElementRef;
  @ViewChild('scrollThree') scrollThree!: ElementRef;
  @ViewChild('scrollFour') scrollFour!: ElementRef;
  @ViewChild('scrollFive') scrollFive!: ElementRef;
  @ViewChild('scrollSix') scrollSix!: ElementRef;
  @ViewChild('scrollSeven') scrollSeven!: ElementRef;
  @ViewChild('scrollEight') scrollEight!: ElementRef;

  updateVerticalScroll(event: any) {
    if (this.currentElement === 'scrollTwo') {
      this.scrollOne.nativeElement.scrollLeft = event.target.scrollLeft;
    } else if (this.currentElement === 'scrollOne') {
      this.scrollTwo.nativeElement.scrollLeft = event.target.scrollLeft;
    } else if (this.currentElement === 'scrollThree') {
      this.scrollFour.nativeElement.scrollLeft = event.target.scrollLeft;
    } else if (this.currentElement === 'scrollFour') {
      this.scrollThree.nativeElement.scrollLeft = event.target.scrollLeft;
    } else if (this.currentElement === 'scrollFive') {
      this.scrollSix.nativeElement.scrollLeft = event.target.scrollLeft;
    } else if (this.currentElement === 'scrollSix') {
      this.scrollFive.nativeElement.scrollLeft = event.target.scrollLeft;
    } else if (this.currentElement === 'scrollSeven') {
      this.scrollEight.nativeElement.scrollLeft = event.target.scrollLeft;
    } else if (this.currentElement === 'scrollEight') {
      this.scrollSeven.nativeElement.scrollLeft = event.target.scrollLeft;
    }
  }
  updateCurrentElement(element: 'scrollOne' | 'scrollTwo' | 'scrollThree' | 'scrollFour' | 'scrollFive' | 'scrollSix' | 'scrollSeven' | 'scrollEight') {
    this.currentElement = element;
  }

  
  // Bar options

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        grid:{
          display:false
        }
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false, // remove head
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        color: 'white'
      },
      title: {
        display: false,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  // Area 1
  public barChartData: ChartData = {
    labels: this.barChartLabel1,
    datasets: [
      {
        type: 'line',
        data: [70, 90],
        datalabels: {
          display: false,
        },
        label: 'Non-oil',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(198,93,22,255)',
      },
      {
        data: [29, 26, 55, 20],
        label: 'Other',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [25, 36, 27, 30],
        label: 'ItAndTelecom',
        backgroundColor: 'rgba(229,120,114,255)',
        hoverBackgroundColor: 'rgba(229,120,114,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [25, 36, 17, 20],
        label: 'Per capita',
        backgroundColor: 'rgba(124,151,179,255)',
        hoverBackgroundColor: 'rgba(124,151,179,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [20, 26, 27, 25],
        label: 'Agriculture',
        backgroundColor: 'rgba(255,192,0,255)',
        hoverBackgroundColor: 'rgba(255,192,0,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [24, 30, 37, 30],
        label: 'Construction',
        backgroundColor: 'rgba(140,189,107,255)',
        hoverBackgroundColor: 'rgba(140,189,107,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        type: 'scatter',
        data: [200, 200, 200, 200],
        label: 'Per capita',
        backgroundColor: 'rgba(124,151,179,255)',
        hoverBackgroundColor: 'rgba(124,151,179,255)',
        stack: 'a',
        pointStyle:'rect',
        pointRadius: 25,
        pointHoverRadius: 25,
        datalabels: {
          anchor: 'center',
          align: 'center',
          color: 'white'
        },
      },
    ],
  };
  public barChartData2: ChartData = {
    labels: this.barChartLabel2,
    datasets: [
      {
        type: 'line',
        data: [80, 90],
        datalabels: {
          display: false,
        },
        label: 'Non-oil',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(198,93,22,255)',
      },
      {
        data: [29, 36, 45, 25],
        label: 'Other',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [35, 26, 35, 25],
        label: 'ItAndTelecom',
        backgroundColor: 'rgba(229,120,114,255)',
        hoverBackgroundColor: 'rgba(229,120,114,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [35, 20, 17, 26],
        label: 'Per capita',
        backgroundColor: 'rgba(65,188,170,255)',
        hoverBackgroundColor: 'rgba(65,188,170,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [20, 21, 31, 23],
        label: 'Agriculture',
        backgroundColor: 'rgba(255,192,0,255)',
        hoverBackgroundColor: 'rgba(255,192,0,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [24, 30, 37, 30],
        label: 'Construction',
        backgroundColor: 'rgba(140,189,107,255)',
        hoverBackgroundColor: 'rgba(140,189,107,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        type: 'scatter',
        data: [190, 190, 190, 190],
        label: 'Per capita',
        backgroundColor: 'rgba(124,151,179,255)',
        hoverBackgroundColor: 'rgba(124,151,179,255)',
        stack: 'a',
        pointStyle:'rect',
        pointRadius: 25,
        pointHoverRadius: 25,
        datalabels: {
          anchor: 'center',
          align: 'center',
          color: 'white'
        },
      },
    ],
  };


  // Area 2
  public barChartData3: ChartData = {
    labels: this.barChartLabel1,
    datasets: [
      {
        type: 'line',
        data: [80, 90],
        datalabels: {
          color: 'black'
        },
        label: 'Export',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(198,93,22,255)',
      },
      {
        type: 'line',
        data: [70, 70],
        datalabels: {
          color: 'black'
        },
        label: 'Import',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(84,197,191,255)',
      },
      {
        data: [19, 46, 55, 40],
        label: 'Income',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 30,
      },
      {
        data: [40, 56, 27, 70],
        label: 'Spending',
        backgroundColor: 'rgba(229,120,114,255)',
        hoverBackgroundColor: 'rgba(229,120,114,255)',
        barThickness: 30,
      },
    ],
  };
  public barChartData4: ChartData = {
    labels: this.barChartLabel2,
    datasets: [
      {
        type: 'line',
        data: [80, 90],
        datalabels: {
          color: 'black'
        },
        label: 'Export',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(198,93,22,255)',
      },
      {
        type: 'line',
        data: [70, 70],
        datalabels: {
          color: 'black'
        },
        label: 'Import',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(84,197,191,255)',
      },
      {
        data: [19, 26, 45, 50],
        label: 'Income',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 30,
      },
      {
        data: [21, 56, 60, 40],
        label: 'Spending',
        backgroundColor: 'rgba(229,120,114,255)',
        hoverBackgroundColor: 'rgba(229,120,114,255)',
        barThickness: 30,
      },
    ],
  };


  // Area 3
  public barChartData5: ChartData = {
    labels: this.barChartLabel1,
    datasets: [
      {
        data: [29, 13, 8, 20],
        label: 'Sofaz',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [12, 36, 16, 30],
        label: 'Cbar',
        backgroundColor: 'rgba(229,120,114,255)',
        hoverBackgroundColor: 'rgba(229,120,114,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [15, 16, 8, 20],
        label: 'Mof',
        backgroundColor: 'rgba(65,188,170,255)',
        hoverBackgroundColor: 'rgba(65,188,170,255)',
        barThickness: 60,
        stack: 'a'
      },
    ],
  };
  public barChartData6: ChartData = {
    labels: this.barChartLabel2,
    datasets: [
      {
        data: [29, 36, 23, 20],
        label: 'Sofaz',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [35, 26, 19, 20],
        label: 'Cbar',
        backgroundColor: 'rgba(229,120,114,255)',
        hoverBackgroundColor: 'rgba(229,120,114,255)',
        barThickness: 60,
        stack: 'a'
      },
      {
        data: [35, 20, 17, 15],
        label: 'Mof',
        backgroundColor: 'rgba(65,188,170,255)',
        hoverBackgroundColor: 'rgba(65,188,170,255)',
        barThickness: 60,
        stack: 'a'
      },
    ],
  };


  // Area 4
  public barChartData7: ChartData = {
    labels: this.barChartLabel1,
    datasets: [
      {
        type: 'line',
        data: [90, 100],
        datalabels: {
          color: 'black'
        },
        label: 'Workforce',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(198,93,22,255)',
      },
      {
        data: [66, 39, 55, 40],
        label: 'Salary',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 50,
      },
      {
        type: 'scatter',
        data: [140, 140, 140, 140],
        label: 'Unemployed',
        backgroundColor: 'rgba(124,151,179,255)',
        hoverBackgroundColor: 'rgba(124,151,179,255)',
        stack: 'a',
        pointStyle:'rect',
        pointRadius: 25,
        pointHoverRadius: 25,
        datalabels: {
          anchor: 'center',
          align: 'center',
          color: 'white'
        },
      },
    ],
  };
  public barChartData8: ChartData = {
    labels: this.barChartLabel2,
    datasets: [
      {
        type: 'line',
        data: [71, 82],
        datalabels: {
          color: 'black'
        },
        label: 'Workforce',
        borderDash: [10, 5],
        pointStyle: 'star',
        borderColor: 'rgba(198,93,22,255)',
      },
      {
        data: [36, 15, 45, 50],
        label: 'Salary',
        backgroundColor: 'rgba(46,125,158,255)',
        hoverBackgroundColor: 'rgba(46,125,158,255)',
        barThickness: 50,
      },
      {
        type: 'scatter',
        data: [140, 140, 140, 140],
        label: 'Unemployed',
        backgroundColor: 'rgba(124,151,179,255)',
        hoverBackgroundColor: 'rgba(124,151,179,255)',
        stack: 'a',
        pointStyle:'rect',
        pointRadius: 25,
        pointHoverRadius: 25,
        datalabels: {
          anchor: 'center',
          align: 'center',
          color: 'white'
        },
      },
    ],
  };
}
