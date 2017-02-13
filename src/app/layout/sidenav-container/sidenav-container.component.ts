import { Component, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'gpf-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent {
  static BREAKPOINT = 'gt-sm';
  @ViewChild(MdSidenav) drawer: MdSidenav;

  constructor(private media: ObservableMedia) {
  }

  get hideDrawer(): boolean {
    return !this.media.isActive(SidenavContainerComponent.BREAKPOINT);
  }
}
