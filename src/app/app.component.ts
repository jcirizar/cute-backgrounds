import {Component, OnInit} from '@angular/core';
import {FlickrBackgroundsOptions} from '../../projects/flickr-backgrounds/src/lib/flickr-backgrounds-options';

@Component({
  selector: 'jci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cute-backgrounds';
  backgroundOptions: FlickrBackgroundsOptions;

  constructor() {

  }

  changeBackgroundTo(tag: string) {
    this.backgroundOptions.tag = tag;
    this.backgroundOptions = Object.assign({}, this.backgroundOptions, {tag});
    console.log('|=> AppComponent.changeBackgroundTo() tag', tag);
  }

  ngOnInit(): void {
    this.backgroundOptions = {
      tag: 'sky',
      interval: 30
    };
  }
}
