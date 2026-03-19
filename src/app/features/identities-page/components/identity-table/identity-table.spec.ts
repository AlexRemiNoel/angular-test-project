import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityTable } from './identity-table';

describe('IdentityTable', () => {
  let component: IdentityTable;
  let fixture: ComponentFixture<IdentityTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityTable],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentityTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
