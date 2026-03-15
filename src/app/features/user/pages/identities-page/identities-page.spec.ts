import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentitiesPage } from './identities-page';

describe('IdentitiesPage', () => {
  let component: IdentitiesPage;
  let fixture: ComponentFixture<IdentitiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentitiesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentitiesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
