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
      link: '/',
      status: '',
    },
    dieat: {
      link: '/dieat',
      status: '',
    },
    healthlink: {
      link: '/healthlink',
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

  constructor(private router: Router) {
    this.urlMenuActivation()
  }

  ngOnInit(): void {
  }

  urlMenuActivation(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.keys(this.urlMenu).forEach(key => {
          this.urlMenu[key].status = ''
          if (event.url == this.urlMenu[key].link) {
            this.urlMenu[key].status = 'active'
          }
        })
      }
    });
  }

  keys<O extends object>(obj: O): Array<keyof O> {
    return Object.keys(obj) as Array<keyof O>
  }

}
