import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-healthlink',
  templateUrl: './healthlink.component.html',
  styleUrls: ['./healthlink.component.scss']
})
export class HealthlinkComponent implements OnInit {
  urlMenu = {
    status: {
      link: '/healthlink/status',
      status: 'btn-outline-danger',
    },
    heartrate: {
      link: '/healthlink/heartrate',
      status: 'btn-outline-danger',
    },
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.urlMenuActivation(this.router.url)

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.urlMenuActivation(event.url)
      }
    });
  }

  urlMenuActivation(currentUrl: String): void {
    this.keys(this.urlMenu).forEach(key => {
      this.urlMenu[key].status = 'btn-outline-danger'
      if (currentUrl == this.urlMenu[key].link) {
        this.urlMenu[key].status = 'btn-danger'
      }
    })
  }

  keys<O extends object>(obj: O): Array<keyof O> {
    return Object.keys(obj) as Array<keyof O>
  }

}
