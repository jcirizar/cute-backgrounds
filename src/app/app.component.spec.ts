import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FlickrBackgroundsModule} from '../../projects/flickr-backgrounds/src/lib/flickr-backgrounds.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FlickrBackgroundsModule.forRoot('6dd24da25ccbc072d5b7161bd1a448cc')
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'cute-backgrounds'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('cute-backgrounds');
  // });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBeTruthy();
  });
});
