import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material';

const MD_BREAKPOINT = 960;

@Component({
  selector: 'gpf-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent implements OnInit {
  @ViewChild(MdSidenav) drawer: MdSidenav;

  ngOnInit(): void {
    this.shouldDrawerClose();
  }

  isSmallScreen(): boolean {
    return window.matchMedia(`(max-width: ${MD_BREAKPOINT}px)`).matches;
  }

  drawerAction(action: string): void {
    switch (action) {
      case 'open':
        this.drawer.open();
        break;
      case 'close':
        this.drawer.close();
        break;
      case 'toggle':
        this.drawer.toggle();
        break;
    }
  }

  private shouldDrawerClose(): void {
    if (this.isSmallScreen() && !this.drawer._isOpened) {
      this.drawer.close();
    }
  }

  @HostListener('window:resize')
  private onResize() {
    this.shouldDrawerClose();
  }
}
