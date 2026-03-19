import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdentity } from './add-identity';

describe('AddIdentity', () => {
  let component: AddIdentity;
  let fixture: ComponentFixture<AddIdentity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIdentity],
    }).compileComponents();

    fixture = TestBed.createComponent(AddIdentity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
