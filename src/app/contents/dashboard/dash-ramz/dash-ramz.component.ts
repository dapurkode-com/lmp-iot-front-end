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
  stockSummaryFilterSelect: any = ''
  stockSummaryFilterString = ''
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
    fetch(`${global.api_url}stock/summary?page=${this.pageActive}&sort=DESC&number_item=5${this.stockSummaryFilterString}`)
      .then(response => response.json())
      .then(data => {
        let _data: any

        if (data.data) {
          _data = data.data
        } else {
          _data = data
        }

        _data.stocks.forEach((stock: any, i: any) => {
          _data.stocks[i].expiredDateReadable = moment(stock.expired_date).format('DD MMMM YYYY')

          let startDate = moment();
          let endDate = moment(stock.expired_date);
          let months = endDate.diff(startDate, 'months');
          startDate.add(months, 'months');
          let days = endDate.diff(startDate, 'days');
          if (months > 0) {
            if (months == 1) {
              _data.stocks[i].expiredWithin = `${months} Month`;
            } else {
              _data.stocks[i].expiredWithin = `${months} Months`;
            }
          } else if (days > 0) {
            if (days == 1) {
              _data.stocks[i].expiredWithin = `${days} Day`;
            } else {
              _data.stocks[i].expiredWithin = `${days} Days`;
            }
          } else {
            _data.stocks[i].expiredWithin = `Expired`;
          }
        });
        _data.pagination.startIndex = (_data.pagination.per_page * _data.pagination.current_page) - _data.pagination.per_page + 1
        _data.pagination.endIndex = _data.pagination.startIndex + _data.pagination.count - 1
        this.stockSummary = _data
      });
  }
  setPageActiveAndStockSummary(page: number): void {
    if (page >=1 && page <= this.stockSummary.pagination.total_pages) {
      this.pageActive = page
      this.setStockSummary()
    }
  }
  applyStockSummaryFilter(): void {
    if (this.stockSummaryFilterSelect == 7) {
      this.stockSummaryFilterString = `&range_day=${this.stockSummaryFilterSelect}`
    } else if (this.stockSummaryFilterSelect == '') {
      this.stockSummaryFilterString = ``
    } else {
      this.stockSummaryFilterString = `&range_month=${this.stockSummaryFilterSelect}`
    }
    this.setStockSummary()
  }
}
