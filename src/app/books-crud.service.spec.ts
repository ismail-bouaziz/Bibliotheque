import { TestBed } from '@angular/core/testing';

import { BooksCRUDService } from './books-crud.service';

describe('BooksCRUDService', () => {
  let service: BooksCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
