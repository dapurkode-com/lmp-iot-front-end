import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  fullscreenIconClass = 'mdi-fullscreen'

  constructor() { }

  ngOnInit(): void {
  }

  toggleFullscreen() {
    const fullscreenElm = document.fullscreenElement

    if (fullscreenElm !== null) {
      document.exitFullscreen()
        .then(() => {
          this.fullscreenIconClass = 'mdi-fullscreen'
        })
      } else {
        document.querySelector('body')?.requestFullscreen()
        .then(() => {
          this.fullscreenIconClass = 'mdi-fullscreen-exit'
        })
    }
  }
}
