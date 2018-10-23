import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPeliculasComponent } from './content-peliculas.component';

describe('ContentPeliculasComponent', () => {
  let component: ContentPeliculasComponent;
  let fixture: ComponentFixture<ContentPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
