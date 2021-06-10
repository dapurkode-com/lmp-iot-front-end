import { Component, OnInit } from '@angular/core';
import global from '../../../_file/app.json';
import * as moment from 'moment';

@Component({
  selector: 'app-health-mood',
  templateUrl: './health-mood.component.html',
  styleUrls: ['./health-mood.component.scss']
})
export class HealthMoodComponent implements OnInit {

  heartRateObj = {
    dateReadable: null,
    rate: null,
    happy: null,
    neutral: null,
    sad: null,
    mood_text: null
  }

  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.heartRateObj = JSON.parse('' + localStorage.getItem(global.string_key.heartRateJson))

    this.setHeartRateObj()
    this.timeInterval = setInterval(() => {
      this.setHeartRateObj()
    }, 1000 * 60)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.heartRateJson, JSON.stringify(this.heartRateObj))
  }

  setHeartRateObj(): void {
    fetch(`${global.api_url}heart-rate/today`)
      .then(response => response.json())
      .then(data => {
        data.dateReadable = moment(data.datetime).format('DD MMMM YYYY, h:mmA')
        this.heartRateObj = data
      });
  }
}
