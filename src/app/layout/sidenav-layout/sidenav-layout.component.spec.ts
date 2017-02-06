/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { SidenavLayoutComponent } from './sidenav-layout.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

describe('SidenavLayoutComponent', () => {
  let component: SidenavLayoutComponent;
  let fixture: ComponentFixture<SidenavLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      declarations: [
        SidenavLayoutComponent,
        ToolbarComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
