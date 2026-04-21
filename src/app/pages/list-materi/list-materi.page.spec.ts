import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMateriPage } from './list-materi.page';

describe('ListMateriPage', () => {
  let component: ListMateriPage;
  let fixture: ComponentFixture<ListMateriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMateriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
