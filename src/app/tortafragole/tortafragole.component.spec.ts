import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortafragoleComponent } from './tortafragole.component';

describe('TortafragoleComponent', () => {
  let component: TortafragoleComponent;
  let fixture: ComponentFixture<TortafragoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortafragoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortafragoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
