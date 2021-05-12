import { Component, OnInit } from '@angular/core';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-dash-calorie-deviation',
  templateUrl: './dash-calorie-deviation.component.html',
  styleUrls: ['./dash-calorie-deviation.component.scss']
})
export class DashCalorieDeviationComponent implements OnInit {
  calorieDeviation: any = {
    iconColor: null,
    icon: null,
    calorieReadable: null,
    status: null,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.calorieDeviation = JSON.parse('' + localStorage.getItem(global.string_key.calorieDeviationJson))

    this.setCalorieDeviation()

    this.timeInterval =  setInterval(() => {
      this.setCalorieDeviation()
    }, 1000*60)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.calorieDeviationJson, JSON.stringify(this.calorieDeviation))
  }

  setCalorieDeviation(): void {
    fetch(`${global.api_url}calorie-intake/today`)
      .then(response => response.json())
      .then(data => {
        let calorieIn = 0;
        if (data.status != 'failed') {
          calorieIn = data.calorie
        }

        fetch(`${global.api_url}calorie-expended/today`)
          .then(response => response.json())
          .then(data => {
            let calorieOut = 0;
            if (data.status != 'failed') {
              calorieOut = data.calorie
            }

            let calorieDiff = calorieIn - calorieOut
            if (calorieIn === calorieOut) {
              this.calorieDeviation = {
                iconColor: 'icon-box-secondary',
                icon: 'mdi-minus',
                calorieReadable: new Intl.NumberFormat().format(calorieIn - calorieOut),
                status: 'Neutral',
              }
            }
            if (calorieIn > calorieOut) {
              this.calorieDeviation = {
                iconColor: 'icon-box-success',
                icon: 'mdi-arrow-top-right',
                calorieReadable: new Intl.NumberFormat().format(calorieIn - calorieOut),
                status: 'Surplus',
              }
            }
            if (calorieIn < calorieOut) {
              this.calorieDeviation = {
                iconColor: 'icon-box-danger',
                icon: 'mdi-arrow-bottom-left',
                calorieReadable: new Intl.NumberFormat().format(calorieIn - calorieOut),
                status: 'Deficit',
              }
            }
          })
      })
  }
}
