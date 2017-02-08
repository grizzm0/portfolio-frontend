import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gpf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() isSmallScreen: boolean;
  @Output() drawer = new EventEmitter<string>();

  toggleDrawer(): void {
    this.drawer.emit('toggle');
  }
}
