import { Component, OnInit } from '@angular/core';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-water-quality',
  templateUrl: './water-quality.component.html',
  styleUrls: ['./water-quality.component.scss']
})
export class WaterQualityComponent implements OnInit {
  waterQuality: any = {
    iconColor: null,
    score: null,
    text: null,
    textEmphasize: null,
    textEmphasizeColor: null,
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.setWaterQuality()
    this.timeInterval = setInterval(() => {
      this.setWaterQuality()
    }, 1000 * 3)
  }

  setWaterQuality(): void {
    let waterQualityFromStorage = JSON.parse('' + localStorage.getItem(global.string_key.waterQualityJson))
    let phScore = 0
    let ppmScore = 0
    let conductivityScore = 0
    if (waterQualityFromStorage) {
      phScore = waterQualityFromStorage?.phScore || 0
      ppmScore = waterQualityFromStorage?.ppmScore || 0
      conductivityScore = waterQualityFromStorage?.conductivityScore || 0
    }
    let scoreCalc = (phScore * 40 / 100) + (ppmScore * 35 / 100) + (conductivityScore * 25 / 100)

    let score = 1
    let iconColor = 'icon-box-danger'
    let text = `` +
      `The conclusion on your drinking water is ${score}. ` +
      `Nayy... Your water condition is dangerous, even pirates drink better water than this`
    let textEmphasize = 'You should change your water!'
    let textEmphasizeColor = 'text-danger'
    if (scoreCalc >= 5) {
      score = 5
      iconColor = 'icon-box-success'
      text = `` +
        `The conclusion on your drinking water is ${score}. ` +
        `Yayy... Your water is in excellent condition`
      textEmphasize = 'Keep up the good work!'
      textEmphasizeColor = 'text-success'
    } else if (scoreCalc >= 4 && scoreCalc < 5) {
      score = 4
      iconColor = 'icon-box-success'
      text = `` +
        `The conclusion on your drinking water is ${score}. ` +
        `Yayy... Your water is in good condition`
      textEmphasize = 'Keep up the good work!'
      textEmphasizeColor = 'text-success'
    } else if (scoreCalc >= 3 && scoreCalc < 4) {
      score = 3
      iconColor = 'icon-box-success'
      text = `` +
        `The conclusion on your drinking water is ${score}. ` +
        `Yayy... Your water is in fair condition`
      textEmphasize = 'Keep up the good work!'
      textEmphasizeColor = 'text-success'
    } else if (scoreCalc >= 2 && scoreCalc < 3) {
      score = 2
      iconColor = 'icon-box-danger'
      text = `` +
        `The conclusion on your drinking water is ${score}. ` +
        `Nayy... Your water condition is dangerous, even pirates drink better water than this`
      textEmphasize = 'You should change your water!'
      textEmphasizeColor = 'text-danger'
    }

    this.waterQuality.iconColor = iconColor
    this.waterQuality.score = score
    this.waterQuality.text = text
    this.waterQuality.textEmphasize = textEmphasize
    this.waterQuality.textEmphasizeColor = textEmphasizeColor
  }
}
