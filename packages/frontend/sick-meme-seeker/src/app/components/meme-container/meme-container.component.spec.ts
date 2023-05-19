import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeContainerComponent } from './meme-container.component';

describe('MemeContainerComponent', () => {
  let component: MemeContainerComponent;
  let fixture: ComponentFixture<MemeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemeContainerComponent]
    });
    fixture = TestBed.createComponent(MemeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
