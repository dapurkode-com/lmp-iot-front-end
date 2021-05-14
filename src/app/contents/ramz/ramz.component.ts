import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import global from '../../_file/app.json';

@Component({
  selector: 'app-ramz',
  templateUrl: './ramz.component.html',
  styleUrls: ['./ramz.component.scss']
})
export class RamzComponent implements OnInit {
  stockSummary: any = {
    stocks: [],
    pagination: {}
  }
  stockSummaryFilterSelect: any = ''
  stockSummaryFilterString = ''
  stock: any = {
    stocks: [],
    pagination: {}
  }
  pageActiveStockSummary = 1
  pageActiveStock = 1
  timeInterval: any

  constructor() { }

  ngOnInit(): void {
    this.stockSummary = JSON.parse('' + localStorage.getItem(global.string_key.stockSummaryJson))
    this.stock = JSON.parse('' + localStorage.getItem(global.string_key.stockJson))

    this.setStockSummary()
    this.setStock()

    this.timeInterval =  setInterval(() => {
      this.setStockSummary()
      this.setStock()
    }, 1000*60)
  }
  ngOnDestroy(): void {
    clearInterval(this.timeInterval)
    localStorage.setItem(global.string_key.stockSummaryJson, JSON.stringify(this.stockSummary))
    localStorage.setItem(global.string_key.stockJson, JSON.stringify(this.stock))
  }

  setStockSummary(): void {
    fetch(`${global.api_url}stock/summary?page=${this.pageActiveStockSummary}&sort=DESC&number_item=5${this.stockSummaryFilterString}`)
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
  setStock(): void {
    fetch(`${global.api_url}stock?page=${this.pageActiveStock}&sort=DESC&number_item=5`)
      .then(response => response.json())
      .then(data => {
        data.stocks.forEach((stock: any, i: any) => {
          data.stocks[i].expiredDateReadable = moment(stock.expired_date).format('DD MMMM YYYY')
          if (stock.position == 'IN') {
            data.stocks[i].iconColor = 'icon-box-success'
            data.stocks[i].icon = 'mdi-arrow-bottom-left'
          } else {
            data.stocks[i].iconColor = 'icon-box-danger'
            data.stocks[i].icon = 'mdi-arrow-top-right'
          }
        });
        data.pagination.startIndex = (data.pagination.per_page * data.pagination.current_page) - data.pagination.per_page + 1
        data.pagination.endIndex = data.pagination.startIndex + data.pagination.count - 1
        this.stock = data
      });
  }

  setPageActiveAndStockSummary(page: number): void {
    if (page >=1 && page <= this.stockSummary.pagination.total_pages) {
      this.pageActiveStockSummary = page
      this.setStockSummary()
    }
  }
  setPageActiveAndStock(page: number): void {
    if (page >=1 && page <= this.stock.pagination.total_pages) {
      this.pageActiveStock = page
      this.setStock()
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
