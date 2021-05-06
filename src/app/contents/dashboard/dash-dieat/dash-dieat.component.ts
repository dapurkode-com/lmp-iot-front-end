import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-dash-dieat',
  templateUrl: './dash-dieat.component.html',
  styleUrls: ['./dash-dieat.component.scss']
})
export class DashDieatComponent implements OnInit, OnDestroy {
  calorieObj = {
    dateReadable: null,
    calorieReadable: null,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.calorieObj = JSON.parse('' + localStorage.getItem(global.string_key.calorieInJson))

    this.setCalorieObj()

    this.timeInterval =  setInterval(() => {
      this.setCalorieObj()
    }, 10000)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.calorieInJson, JSON.stringify(this.calorieObj))
  }

  setCalorieObj(): void {
    fetch(`${global.api_url}calorie-intake/today`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.calorieReadable = new Intl.NumberFormat().format(data.calorie)
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
          this.calorieObj = data
        }
      });
  }

}
