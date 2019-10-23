import { TestBed, async, inject } from '@angular/core/testing';

import { FrontpageGuard } from './frontpage.guard';

describe('FrontpageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontpageGuard]
    });
  });

  it('should ...', inject([FrontpageGuard], (guard: FrontpageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
