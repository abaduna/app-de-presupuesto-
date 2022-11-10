import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListargastoComponent } from './listargasto.component';

describe('ListargastoComponent', () => {
  let component: ListargastoComponent;
  let fixture: ComponentFixture<ListargastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListargastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListargastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
