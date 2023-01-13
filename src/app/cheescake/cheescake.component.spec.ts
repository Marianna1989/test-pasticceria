import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheescakeComponent } from './cheescake.component';

describe('CheescakeComponent', () => {
  let component: CheescakeComponent;
  let fixture: ComponentFixture<CheescakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheescakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheescakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
