import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-dash-hydrogauges',
  templateUrl: './dash-hydrogauges.component.html',
  styleUrls: ['./dash-hydrogauges.component.scss']
})
export class DashHydrogaugesComponent implements OnInit, OnDestroy {
  phObj = {
    dateReadable: null,
    ph: null,
  }
  ppmObj = {
    dateReadable: null,
    ppm: null,
  }
  temperatureObj = {
    dateReadable: null,
    temperature: null,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.phObj = JSON.parse('' + localStorage.getItem(global.string_key.phJson))
    this.ppmObj = JSON.parse('' + localStorage.getItem(global.string_key.ppmJson))
    this.temperatureObj = JSON.parse('' + localStorage.getItem(global.string_key.temperatureJson))

    this.setPhObj()
    this.setPpmObj()
    this.setTemperatureObj()

    this.timeInterval =  setInterval(() => {
      this.setPhObj()
      this.setPpmObj()
      this.setTemperatureObj()
    }, 1000*30)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.phJson, JSON.stringify(this.phObj))
    localStorage.setItem(global.string_key.ppmJson, JSON.stringify(this.ppmObj))
    localStorage.setItem(global.string_key.temperatureJson, JSON.stringify(this.temperatureObj))
  }

  setPhObj(): void {
    fetch(`${global.api_url}ph/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
          this.phObj = data
        }
      });
  }
  setPpmObj(): void {
    fetch(`${global.api_url}ppm/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
          this.ppmObj = data
        }
      });
  }
  setTemperatureObj(): void {
    fetch(`${global.api_url}temperature/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
          this.temperatureObj = data
        }
      });
  }
}
