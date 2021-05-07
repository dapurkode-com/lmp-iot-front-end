import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../../_file/app.json';

@Component({
  selector: 'app-dash-ramz',
  templateUrl: './dash-ramz.component.html',
  styleUrls: ['./dash-ramz.component.scss']
})
export class DashRamzComponent implements OnInit {
  stockSummary: any = {
    stocks: [],
    pagination: {}
  }
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.stockSummary = JSON.parse('' + localStorage.getItem(global.string_key.stockSummaryJson))

    this.setStockSummary()

    this.timeInterval =  setInterval(() => {
      this.setStockSummary()
    }, 1000*30)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.stockSummaryJson, JSON.stringify(this.stockSummary))
  }

  setStockSummary(): any {
    fetch(`${global.api_url}stock/summary`)
      .then(response => response.json())
      .then(data => {
        data.stocks.forEach((stock: any, i: any) => {
          data.stocks[i].expiredDateReadable = moment(stock.expired_date).format('DD MMMM YYYY, h:mmA')
        });
        this.stockSummary = data
      });
  }
}
