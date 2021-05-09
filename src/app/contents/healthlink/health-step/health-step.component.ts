import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-health-step',
  templateUrl: './health-step.component.html',
  styleUrls: ['./health-step.component.scss']
})
export class HealthStepComponent implements OnInit {
  stepObj: any = {
    dateReadable: null,
    stepReadable: null,
  }
  stepStatus: any = {
    status: 'Idle',
    icon: 'fa-child',
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.stepObj = JSON.parse('' + localStorage.getItem(global.string_key.stepJson))
    this.stepStatus = JSON.parse('' + localStorage.getItem(global.string_key.stepStatusJson))

    this.setStepObj()
    this.setStepStatus()

    this.timeInterval = setInterval(() => {
      this.setStepObj()
      this.setStepStatus()
    }, 1000*30)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.stepJson, JSON.stringify(this.stepObj))
    localStorage.setItem(global.string_key.stepStatusJson, JSON.stringify(this.stepStatus))
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

  setStepStatus(): void {
    fetch(`${global.api_url}step?sort=DESC&number_item=2`)
      .then(response => response.json())
      .then(data => {
        let stepDiff = data.steps[0].step - data.steps[1].step

        if (stepDiff <= 0) {
          this.stepStatus = {
            status: 'Idle',
            icon: 'fa-child',
          }
        } else if (stepDiff > 0 && stepDiff <= 500) {
          this.stepStatus = {
            status: 'Walking',
            icon: 'fa-walking',
          }
        } else if (stepDiff > 500 && stepDiff <= 1000) {
          this.stepStatus = {
            status: 'Running',
            icon: 'fa-running',
          }
        } else {
          this.stepStatus = {
            status: 'Biking',
            icon: 'fa-biking',
          }
        }
      })
  }
}
