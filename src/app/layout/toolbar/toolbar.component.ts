import { Component, Input } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MdSidenav } from '@angular/material';

import { SidenavContainerComponent } from '../sidenav-container/sidenav-container.component';

@Component({
  selector: 'gpf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() drawer: MdSidenav;

  constructor(private media: ObservableMedia) {
  }

  get hideDrawerButton(): boolean {
    return !this.media.isActive(SidenavContainerComponent.BREAKPOINT);
  }
}
