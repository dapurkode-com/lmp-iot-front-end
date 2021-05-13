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
  pageActive = 1
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.stockSummary = JSON.parse('' + localStorage.getItem(global.string_key.stockSummaryJson))

    this.setStockSummary()

    this.timeInterval =  setInterval(() => {
      this.setStockSummary()
    }, 1000*60)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.stockSummaryJson, JSON.stringify(this.stockSummary))
  }

  setStockSummary(): void {
    fetch(`${global.api_url}stock/summary?page=${this.pageActive}&sort=DESC&number_item=5`)
      .then(response => response.json())
      .then(data => {
        data.stocks.forEach((stock: any, i: any) => {
          data.stocks[i].expiredDateReadable = moment(stock.expired_date).format('DD MMMM YYYY')

          let startDate = moment();
          let endDate = moment(stock.expired_date);
          let months = endDate.diff(startDate, 'months');
          startDate.add(months, 'months');
          let days = endDate.diff(startDate, 'days');
          if (months > 0) {
            if (months == 1) {
              data.stocks[i].expiredWithin = `${months} Month`;
            } else {
              data.stocks[i].expiredWithin = `${months} Months`;
            }
          } else if (days > 0) {
            if (days == 1) {
              data.stocks[i].expiredWithin = `${days} Day`;
            } else {
              data.stocks[i].expiredWithin = `${days} Days`;
            }
          } else {
            data.stocks[i].expiredWithin = `Expired`;
          }
        });
        data.pagination.startIndex = (data.pagination.per_page * data.pagination.current_page) - data.pagination.per_page + 1
        data.pagination.endIndex = data.pagination.startIndex + data.pagination.count - 1
        this.stockSummary = data
      });
  }

  setPageActiveAndStockSummary(page: number): void {
    if (page >=1 && page <= this.stockSummary.pagination.total_pages) {
      this.pageActive = page
      this.setStockSummary()
    }
  }
}
