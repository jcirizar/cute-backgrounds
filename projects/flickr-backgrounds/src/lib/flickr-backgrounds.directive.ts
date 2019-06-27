import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FlickrBackgroundsService} from './flickr-backgrounds.service';
import {switchMap, takeWhile} from 'rxjs/operators';
import {FlickrBackgroundsOptions} from './flickr-backgrounds-options';


@Directive({
  selector: '[ngxFlickrBackgrounds]'
})
export class FlickrBackgroundsDirective implements OnInit, OnDestroy {
  @Input('ngxFlickrBackgrounds')
  set options(val: FlickrBackgroundsOptions) {
    this.optionsObservable.next(val);
  }

  alive = true;
  optionsObservable = new BehaviorSubject<FlickrBackgroundsOptions>({
    interval: 5,
    tag: 'cute, panda'
  });

  constructor(private el: ElementRef,
              private fbs: FlickrBackgroundsService) {
    el.nativeElement.style.background = 'transparent center center/cover no-repeat fixed';
    el.nativeElement.style.transition = '.5s';
  }

  ngOnInit() {
    this.optionsObservable.asObservable()
      .pipe(
        takeWhile(() => this.alive),
        switchMap((options: FlickrBackgroundsOptions) => {
          return this.fbs.getPhotosWithOptions(options);
        })
      )
      .subscribe((url) => {
        this.el.nativeElement.style.backgroundImage = `url(${url})`;
      }, console.error);
  }


  ngOnDestroy(): void {
    this.alive = false;
  }

}
