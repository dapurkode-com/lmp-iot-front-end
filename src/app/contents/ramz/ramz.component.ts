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
    fetch(`${global.api_url}stock/summary?page=${this.pageActiveStockSummary}&sort=DESC&number_item=5`)
      .then(response => response.json())
      .then(data => {
        data.stocks.forEach((stock: any, i: any) => {
          data.stocks[i].expiredDateReadable = moment(stock.expired_date).format('DD MMMM YYYY')
        });
        data.pagination.startIndex = (data.pagination.per_page * data.pagination.current_page) - data.pagination.per_page + 1
        data.pagination.endIndex = data.pagination.startIndex + data.pagination.count - 1
        this.stockSummary = data
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
}
