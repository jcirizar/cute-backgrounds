import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlickrBackgroundsComponent} from './flickr-backgrounds.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiKeyService} from './flickr-backgrounds.token';

describe('FlickrBackgroundsComponent', () => {
  let component: FlickrBackgroundsComponent;
  let fixture: ComponentFixture<FlickrBackgroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlickrBackgroundsComponent],
      imports: [
        HttpClientModule
      ],
      providers: [{provide: ApiKeyService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
