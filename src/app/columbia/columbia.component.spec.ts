import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumbiaComponent } from './columbia.component';

describe('ColumbiaComponent', () => {
  let component: ColumbiaComponent;
  let fixture: ComponentFixture<ColumbiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumbiaComponent]
    });
    fixture = TestBed.createComponent(ColumbiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
