import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesStartComponent } from './abilities-start.component';

describe('AbilitiesStartComponent', () => {
  let component: AbilitiesStartComponent;
  let fixture: ComponentFixture<AbilitiesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitiesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
