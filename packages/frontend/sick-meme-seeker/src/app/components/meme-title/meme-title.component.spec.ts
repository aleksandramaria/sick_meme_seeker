import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeTitleComponent } from './meme-title.component';

describe('MemeTitleComponent', () => {
  let component: MemeTitleComponent;
  let fixture: ComponentFixture<MemeTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemeTitleComponent]
    });
    fixture = TestBed.createComponent(MemeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
