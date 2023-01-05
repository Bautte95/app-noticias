import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiastadoNoticiasComponent } from './liastado-noticias.component';

describe('LiastadoNoticiasComponent', () => {
  let component: LiastadoNoticiasComponent;
  let fixture: ComponentFixture<LiastadoNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiastadoNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiastadoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
