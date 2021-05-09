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
    calorieReadable: null,
  }
  heartRateObj = {
    dateReadable: null,
    rate: null,
  }
  sleepObj = {
    dateStartReadable: null,
    dateEndReadable: null,
    monthYear: null,
    duration: 0,
  }
  stepObj = {
    dateReadable: null,
    stepReadable: null,
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
    this.sleepObj = JSON.parse('' + localStorage.getItem(global.string_key.sleepJson))
    this.stepObj = JSON.parse('' + localStorage.getItem(global.string_key.stepJson))
    this.weightObj = JSON.parse('' + localStorage.getItem(global.string_key.weightJson))

    this.setCalorieObj()
    this.setHeartRateObj()
    this.setSleepObj()
    this.setStepObj()
    this.setWeightObj()

    this.timeInterval =  setInterval(() => {
      this.setCalorieObj()
      this.setHeartRateObj()
      this.setSleepObj()
      this.setStepObj()
      this.setWeightObj()
    }, 1000*30)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.calorieOutJson, JSON.stringify(this.calorieObj))
    localStorage.setItem(global.string_key.heartRateJson, JSON.stringify(this.heartRateObj))
    localStorage.setItem(global.string_key.sleepJson, JSON.stringify(this.sleepObj))
    localStorage.setItem(global.string_key.stepJson, JSON.stringify(this.stepObj))
    localStorage.setItem(global.string_key.weightJson, JSON.stringify(this.weightObj))
  }

  setCalorieObj(): void {
    fetch(`${global.api_url}calorie-expended/today`)
      .then(response => response.json())
      .then(data => {
        data.calorieReadable = new Intl.NumberFormat().format(data.calorie)
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
  setSleepObj(): void {
    fetch(`${global.api_url}sleep/today`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateStartReadable = moment(data.start_datetime).format('DD, h:mmA')
          data.dateEndReadable = moment(data.end_datetime).format('DD, h:mmA')
          data.monthYear = moment(data.end_datetime).format('MMMM YYYY')
          data.duration = moment(data.end_datetime).diff(moment(data.start_datetime), 'hours')
          this.sleepObj = data
        }
      })
  }
  setStepObj(): void {
    fetch(`${global.api_url}step/today`)
      .then(response => response.json())
      .then(data => {
        data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
        data.stepReadable = new Intl.NumberFormat().format(data.step)
        this.stepObj = data
      })
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
