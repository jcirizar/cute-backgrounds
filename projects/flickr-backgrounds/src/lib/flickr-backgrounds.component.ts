import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FlickrBackgroundsOptions} from './flickr-backgrounds-options';
import {BehaviorSubject} from 'rxjs';
import {switchMap, takeWhile} from 'rxjs/operators';
import {FlickrBackgroundsService} from './flickr-backgrounds.service';

@Component({
  selector: 'ngx-flickr-backgrounds',
  template: `
    <div class="background-target" [ngStyle]="backgroundImage">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./flickr-backgrounds.component.scss']
})
export class FlickrBackgroundsComponent implements OnInit, OnDestroy {
  @Input('options')
  set options(val: FlickrBackgroundsOptions) {
    this.optionsObservable.next(val);
  }

  alive = true;
  backgroundImage = {backgroundImage: ''};

  optionsObservable = new BehaviorSubject<FlickrBackgroundsOptions>({
    interval: 5,
    tag: 'cute, panda'
  });


  constructor(
    private fbs: FlickrBackgroundsService
  ) {
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
        this.backgroundImage.backgroundImage = `url(${url})`;
      }, error1 => console.error);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
