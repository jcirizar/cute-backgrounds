import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlickrBackgroundsModule} from '../../projects/flickr-backgrounds/src/lib/flickr-backgrounds.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlickrBackgroundsModule.forRoot('6dd24da25ccbc072d5b7161bd1a448cc')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
