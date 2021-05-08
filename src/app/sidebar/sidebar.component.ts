import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  urlMenu = {
    dashboard: {
      link: '/dashboard',
      status: '',
    },
    dieat: {
      link: '/dieat',
      status: '',
    },
    healthlink: {
      link: '/healthlink/status',
      status: '',
    },
    ramz: {
      link: '/ramz',
      status: '',
    },
    hydrogauges: {
      link: '/hydrogauges',
      status: '',
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
      this.urlMenu[key].status = ''
      if (currentUrl.includes(this.urlMenu[key].link)) {
        this.urlMenu[key].status = 'active'
      }
    })
  }

  keys<O extends object>(obj: O): Array<keyof O> {
    return Object.keys(obj) as Array<keyof O>
  }

}
