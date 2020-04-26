import { TestBed } from '@angular/core/testing';

import { JavatechieCovid19Service } from './javatechie-covid19.service';

describe('JavatechieCovid19Service', () => {
  let service: JavatechieCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavatechieCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
