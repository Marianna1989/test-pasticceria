import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaparadisoComponent } from './tortaparadiso.component';

describe('TortaparadisoComponent', () => {
  let component: TortaparadisoComponent;
  let fixture: ComponentFixture<TortaparadisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortaparadisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortaparadisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
