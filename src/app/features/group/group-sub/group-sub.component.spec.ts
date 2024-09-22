import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSubComponent } from './group-sub.component';

describe('GroupSubComponent', () => {
  let component: GroupSubComponent;
  let fixture: ComponentFixture<GroupSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
