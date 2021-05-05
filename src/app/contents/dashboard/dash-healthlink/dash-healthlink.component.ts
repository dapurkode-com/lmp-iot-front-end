import { Component, OnDestroy, OnInit, } from '@angular/core';
import * as moment from 'moment';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-dash-healthlink',
  templateUrl: './dash-healthlink.component.html',
  styleUrls: ['./dash-healthlink.component.scss']
})
export class DashHealthlinkComponent implements OnInit, OnDestroy {
  calorieObj = {
    dateReadable: null,
    calorieInKilo: null,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.calorieObj = JSON.parse('' + localStorage.getItem(global.string_key.calorieObj))
    this.setCalorieObj()

    this.timeInterval =  setInterval(() => {
      this.setCalorieObj()
    }, 5000)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.calorieObj, JSON.stringify(this.calorieObj))
  }

  setCalorieObj(): void {
    fetch(`${global.api_url}calorie-expended/today`)
      .then(response => response.json())
      .then(data => {
        data.calorieInKilo = (data.calorie / 1000).toFixed(2)
        data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
        this.calorieObj = data
      });
  }
}
