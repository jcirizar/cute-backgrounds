import { TestBed } from '@angular/core/testing';

import { FlickrBackgroundsService } from './flickr-backgrounds.service';

describe('FlickrBackgroundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrBackgroundsService = TestBed.get(FlickrBackgroundsService);
    expect(service).toBeTruthy();
  });
});
