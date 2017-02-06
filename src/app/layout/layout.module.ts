import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SidenavLayoutComponent } from './sidenav-layout/sidenav-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
  ],
  exports: [
    SidenavLayoutComponent,
  ],
  declarations: [
    SidenavLayoutComponent,
    ToolbarComponent,
  ],
})
export class LayoutModule { }
