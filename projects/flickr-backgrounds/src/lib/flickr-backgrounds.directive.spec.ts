import {FlickrBackgroundsDirective} from './flickr-backgrounds.directive';
import {async, TestBed} from '@angular/core/testing';

describe('FlickrBackgroundsDirective', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: []
    }).compileComponents();
  }));

  it('should create an instance', () => {
    const directive = new FlickrBackgroundsDirective({
      nativeElement: {
        style: {
          background: null,
          transition: null
        }
      }
    }, null);
    expect(directive).toBeTruthy();
  });
});
