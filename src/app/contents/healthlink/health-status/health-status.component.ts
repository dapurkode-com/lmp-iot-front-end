import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.scss']
})
export class HealthStatusComponent implements OnInit {
  calorieObj = {
    dateReadable: null,
    calorieReadable: null,
  }
  heartRateObj = {
    dateReadable: null,
    rate: null,
  }
  weightObj = {
    dateReadable: null,
    weight: null,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.calorieObj = JSON.parse('' + localStorage.getItem(global.string_key.calorieOutJson))
    this.heartRateObj = JSON.parse('' + localStorage.getItem(global.string_key.heartRateJson))
    this.weightObj = JSON.parse('' + localStorage.getItem(global.string_key.weightJson))

    this.setCalorieObj()
    this.setHeartRateObj()
    this.setWeightObj()

    this.timeInterval =  setInterval(() => {
      this.setCalorieObj()
      this.setHeartRateObj()
      this.setWeightObj()
    }, 1000*60)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.calorieOutJson, JSON.stringify(this.calorieObj))
    localStorage.setItem(global.string_key.heartRateJson, JSON.stringify(this.heartRateObj))
    localStorage.setItem(global.string_key.weightJson, JSON.stringify(this.weightObj))
  }

  setCalorieObj(): void {
    fetch(`${global.api_url}calorie-expended/today`)
      .then(response => response.json())
      .then(data => {
        data.calorieReadable = new Intl.NumberFormat().format(data.calorie || 0)
        data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
        this.calorieObj = data
      });
  }
  setHeartRateObj(): void {
    fetch(`${global.api_url}heart-rate/today`)
      .then(response => response.json())
      .then(data => {
        data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
        this.heartRateObj = data
      });
  }
  setWeightObj(): void {
    fetch(`${global.api_url}weight/today`)
      .then(response => response.json())
      .then(data => {
        data.dateReadable = moment(data.start_datetime).format('DD MMMM YYYY, h:mmA')
        this.weightObj = data
      })
  }
}
