import { Component, OnInit } from '@angular/core';
import * as npm from '../../../../../package.json';

@Component({
  selector: 'app-dash-healthlink',
  templateUrl: './dash-healthlink.component.html',
  styleUrls: ['./dash-healthlink.component.scss']
})
export class DashHealthlinkComponent implements OnInit {
  calorieObj = {}

  constructor() { }

  ngOnInit(): void {
    console.log(npm.global.api_url);
    this.getData()
  }

  getData(): void {
    fetch(`${npm.global.api_url}calorie-expended/today`)
      .then(response => response.json())
      .then(data => {
        data.calorieInKilo = (data.calorie / 1000).toFixed(2);
        this.calorieObj = data
      });
  }
}
