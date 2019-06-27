import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrBackgroundsComponent } from './flickr-backgrounds.component';

describe('FlickrBackgroundsComponent', () => {
  let component: FlickrBackgroundsComponent;
  let fixture: ComponentFixture<FlickrBackgroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrBackgroundsComponent ]
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
