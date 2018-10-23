import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPeliculasComponent } from './cards-peliculas.component';

describe('CardsPeliculasComponent', () => {
  let component: CardsPeliculasComponent;
  let fixture: ComponentFixture<CardsPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
