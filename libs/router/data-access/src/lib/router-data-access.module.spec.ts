import { async, TestBed } from '@angular/core/testing';
import { RouterDataAccessModule } from './router-data-access.module';

describe('RouterDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RouterDataAccessModule).toBeDefined();
  });
});
