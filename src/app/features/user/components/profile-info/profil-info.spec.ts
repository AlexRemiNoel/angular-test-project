import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilInfo } from './profil-info';

describe('ProfilInfo', () => {
  let component: ProfilInfo;
  let fixture: ComponentFixture<ProfilInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
