import {ModuleWithProviders, NgModule} from '@angular/core';
import {FlickrBackgroundsComponent} from './flickr-backgrounds.component';
import {FlickrBackgroundsDirective} from './flickr-backgrounds.directive';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ApiKeyService} from './flickr-backgrounds.token';


@NgModule({
  declarations: [FlickrBackgroundsComponent, FlickrBackgroundsDirective],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [FlickrBackgroundsComponent, FlickrBackgroundsDirective]
})
export class FlickrBackgroundsModule {
  static forRoot(flickrApiKey: string): ModuleWithProviders {
    return {
      ngModule: FlickrBackgroundsModule,
      providers: [
        {
          provide: ApiKeyService,
          useValue: flickrApiKey
        }
      ]
    };
  }
}
