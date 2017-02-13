import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
  ],
  exports: [
    SidenavContainerComponent,
  ],
  declarations: [
    SidenavContainerComponent,
    ToolbarComponent,
  ],
})
export class LayoutModule { }
