import { Component, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'gpf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() drawer: MdSidenav;
  @Input() isSmallScreen: boolean;
}
