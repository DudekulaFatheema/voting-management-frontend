import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVoterComponent } from './delete-voter.component';

describe('DeleteVoterComponent', () => {
  let component: DeleteVoterComponent;
  let fixture: ComponentFixture<DeleteVoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVoterComponent]
    });
    fixture = TestBed.createComponent(DeleteVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
