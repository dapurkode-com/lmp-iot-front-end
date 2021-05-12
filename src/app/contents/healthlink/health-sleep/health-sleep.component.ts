import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-health-sleep',
  templateUrl: './health-sleep.component.html',
  styleUrls: ['./health-sleep.component.scss']
})
export class HealthSleepComponent implements OnInit {
  sleepObj = {
    dateStartReadable: null,
    dateEndReadable: null,
    monthYear: null,
    duration: 0,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.sleepObj = JSON.parse('' + localStorage.getItem(global.string_key.sleepJson))

    this.setSleepObj()

    this.timeInterval =  setInterval(() => {
      this.setSleepObj()
    }, 1000*60)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.sleepJson, JSON.stringify(this.sleepObj))
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
}
