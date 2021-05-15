import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../_file/app.json';

@Component({
  selector: 'app-hydrogauges',
  templateUrl: './hydrogauges.component.html',
  styleUrls: ['./hydrogauges.component.scss']
})
export class HydrogaugesComponent implements OnInit {
  conductivityObj = {
    dateReadable: null,
    conductivity: null,
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
    this.conductivityObj = JSON.parse('' + localStorage.getItem(global.string_key.phJson))
    this.ppmObj = JSON.parse('' + localStorage.getItem(global.string_key.ppmJson))
    this.temperatureObj = JSON.parse('' + localStorage.getItem(global.string_key.temperatureJson))

    this.setConductivityObj()
    this.setPpmObj()
    this.setTemperatureObj()

    this.timeInterval = setInterval(() => {
      this.setConductivityObj()
      this.setPpmObj()
      this.setTemperatureObj()
    }, 1000 * 60)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.phJson, JSON.stringify(this.conductivityObj))
    localStorage.setItem(global.string_key.ppmJson, JSON.stringify(this.ppmObj))
    localStorage.setItem(global.string_key.temperatureJson, JSON.stringify(this.temperatureObj))
  }

  setConductivityObj(): void {
    fetch(`${global.api_url}conductivity/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
          this.conductivityObj = data
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
