import {TestBed} from '@angular/core/testing';

import {FlickrBackgroundsService} from './flickr-backgrounds.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiKeyService} from './flickr-backgrounds.token';

describe('FlickrBackgroundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [{provide: ApiKeyService}]
  }));

  it('should be created', () => {
    const service: FlickrBackgroundsService = TestBed.get(FlickrBackgroundsService);
    expect(service).toBeTruthy();
  });
});
