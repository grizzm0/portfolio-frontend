/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { SidenavContainerComponent } from './sidenav-container.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

describe('SidenavContainerComponent', () => {
  let component: SidenavContainerComponent;
  let fixture: ComponentFixture<SidenavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      declarations: [
        SidenavContainerComponent,
        ToolbarComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
