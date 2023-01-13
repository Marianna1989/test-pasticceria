import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrudelComponent } from './strudel.component';

describe('StrudelComponent', () => {
  let component: StrudelComponent;
  let fixture: ComponentFixture<StrudelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrudelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrudelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
