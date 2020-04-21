import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardRowComponent } from './recipe-card-row.component';

describe('RecipeCardRowComponent', () => {
  let component: RecipeCardRowComponent;
  let fixture: ComponentFixture<RecipeCardRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCardRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
