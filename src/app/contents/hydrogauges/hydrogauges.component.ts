import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../_file/app.json';

@Component({
  selector: 'app-hydrogauges',
  templateUrl: './hydrogauges.component.html',
  styleUrls: ['./hydrogauges.component.scss']
})
export class HydrogaugesComponent implements OnInit {
  ph = {
    dateReadable: null,
    ph: null,
    phString: null,
  }
  conductivityObj = {
    dateReadable: null,
    conductivity: null,
    conductivityString: null,
  }
  ppmObj = {
    dateReadable: null,
    ppm: null,
    ppmString: null,
  }
  temperatureObj = {
    dateReadable: null,
    temperature: null,
    temperatureString: null,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.ph = JSON.parse('' + localStorage.getItem(global.string_key.phJson))
    this.conductivityObj = JSON.parse('' + localStorage.getItem(global.string_key.conductivityJson))
    this.ppmObj = JSON.parse('' + localStorage.getItem(global.string_key.ppmJson))
    this.temperatureObj = JSON.parse('' + localStorage.getItem(global.string_key.temperatureJson))

    this.setPh()
    this.setConductivityObj()
    this.setPpmObj()
    this.setTemperatureObj()

    this.timeInterval = setInterval(() => {
      this.setPh()
      this.setConductivityObj()
      this.setPpmObj()
      this.setTemperatureObj()
    }, 1000 * 60)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.phJson, JSON.stringify(this.ph))
    localStorage.setItem(global.string_key.conductivityJson, JSON.stringify(this.conductivityObj))
    localStorage.setItem(global.string_key.ppmJson, JSON.stringify(this.ppmObj))
    localStorage.setItem(global.string_key.temperatureJson, JSON.stringify(this.temperatureObj))
  }

  setPh(): void {
    fetch(`${global.api_url}ph/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')

          let phScore = 1
          let phString = `` +
            `Alkaline Solution\n` +
            `May result toxins enter the body, deplete food reserves in the body, and aggravate the kidneys`
          if (data.ph <= 6.5) {
            phScore = 1
            phString = `` +
            `Acid Solution\n` +
            `May result increase the risk of bone damage`
          } else if (data.ph > 6.5 && data.ph <= 8.5) {
            phScore = 5
            phString = 'Good for health'
          }

          data.phString = phString
          this.ph = data

          let waterQuality = JSON.parse('' + localStorage.getItem(global.string_key.waterQualityJson))
          if (!waterQuality) {
            waterQuality = {}
          }
          waterQuality.phScore = phScore
          localStorage.setItem(global.string_key.waterQualityJson, JSON.stringify(waterQuality))
        }
      });
  }
  setConductivityObj(): void {
    fetch(`${global.api_url}conductivity/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')

          let conductivityScore = 1
          let conductivityString = 'Unacceptable suitability for drinking water'
          if (data.conductivity <= 0.2) {
            conductivityScore = 5
            conductivityString = 'Excellent suitability for drinking water'
          } else if (data.conductivity > 0.2 && data.conductivity <= 0.5) {
            conductivityScore = 4
            conductivityString = 'Good suitability for drinking water'
          } else if (data.conductivity > 0.5 && data.conductivity <= 0.8) {
            conductivityScore = 3
            conductivityString = 'Fair suitability for drinking water'
          } else if (data.conductivity > 0.8 && data.conductivity <= 1.49) {
            conductivityScore = 2
            conductivityString = 'Poor suitability for drinking water'
          }

          data.conductivityString = conductivityString
          this.conductivityObj = data

          let waterQuality = JSON.parse('' + localStorage.getItem(global.string_key.waterQualityJson))
          if (!waterQuality) {
            waterQuality = {}
          }
          waterQuality.conductivityScore = conductivityScore
          localStorage.setItem(global.string_key.waterQualityJson, JSON.stringify(waterQuality))
        }
      });
  }
  setPpmObj(): void {
    fetch(`${global.api_url}ppm/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')

          let ppmScore = 1
          let ppmString = 'Unacceptable suitability for drinking water'
          if (data.ppm <= 150) {
            ppmScore = 5
            ppmString = 'Excellent suitability for drinking water'
          } else if (data.ppm > 150 && data.ppm <= 250) {
            ppmScore = 4
            ppmString = 'Good suitability for drinking water'
          } else if (data.ppm > 250 && data.ppm <= 300) {
            ppmScore = 3
            ppmString = 'Fair suitability for drinking water'
          } else if (data.ppm > 300 && data.ppm <= 500) {
            ppmScore = 2
            ppmString = 'Poor suitability for drinking water'
          }

          data.ppmString = ppmString
          this.ppmObj = data

          let waterQuality = JSON.parse('' + localStorage.getItem(global.string_key.waterQualityJson))
          if (!waterQuality) {
            waterQuality = {}
          }
          waterQuality.ppmScore = ppmScore
          localStorage.setItem(global.string_key.waterQualityJson, JSON.stringify(waterQuality))
        }
      });
  }
  setTemperatureObj(): void {
    fetch(`${global.api_url}temperature/latest`)
      .then(response => response.json())
      .then(data => {
        if (data.status != 'failed') {
          data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')

          let temperatureString = 'The temperature is in dangerous level'
          if (data.temperature <= 15) {
            temperatureString = 'The temperature is in cold level'
          } else if (data.temperature > 15 && data.temperature <= 18) {
            temperatureString = 'The temperature is in optimum level'
          } else if (data.temperature > 18 && data.temperature <= 24) {
            temperatureString = 'The temperature is in cool level'
          } else if (data.temperature > 24 && data.temperature <= 30) {
            temperatureString = 'The temperature is in average level'
          } else if (data.temperature > 30 && data.temperature <= 40) {
            temperatureString = 'The temperature is in warm level'
          } else if (data.temperature > 40 && data.temperature <= 50) {
            temperatureString = 'The temperature is in hot level'
          }

          data.temperatureString = temperatureString
          this.temperatureObj = data
        }
      });
  }
}
