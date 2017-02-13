import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material';

const MD_BREAKPOINT = 960;

@Component({
  selector: 'gpf-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent implements OnInit {
  @ViewChild(MdSidenav) drawer: MdSidenav;

  ngOnInit(): void {
    this.shouldDrawerClose();
  }

  isSmallScreen(): boolean {
    return window.matchMedia(`(max-width: ${MD_BREAKPOINT}px)`).matches;
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
