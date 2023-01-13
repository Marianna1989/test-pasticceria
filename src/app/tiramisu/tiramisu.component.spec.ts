import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiramisuComponent } from './tiramisu.component';

describe('TiramisuComponent', () => {
  let component: TiramisuComponent;
  let fixture: ComponentFixture<TiramisuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiramisuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiramisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
