import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCategoriasComponent } from './content-categorias.component';

describe('ContentCategoriasComponent', () => {
  let component: ContentCategoriasComponent;
  let fixture: ComponentFixture<ContentCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
