# FlickrBackgrounds

Simple library that exposes a component and a directive
to put dynamic backgrounds from flickr.photos.search api in elements.

### Installing the library:
`npm install flickr-backgrounds`
### Get Api Key from Flickr
https://www.flickr.com/services/apps/create/apply/
### Importing the library:
```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlickrBackgroundsModule} from 'flickr-backgrounds';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlickrBackgroundsModule.forRoot('your-api-key')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```
### Using Directive
Directive expects and options object, with:
- `interval`: How often background should stay before switching
- `tag`: Query tag sent to flickr to find photos
```angular2html
<div  [ngxFlickrBackgrounds]="{interval: 5, tag: 'pandas'}">
  Cool Div
</div>
```
### Using Component
Component expects and options attribute with an object:
- `interval`: How often background should stay before switching
- `tag`: Query tag sent to flickr to find photos
```angular2html
  <ngx-flickr-backgrounds [options]="{interval: 20, tag: 'road'}">
    Cool Div
  </ngx-flickr-backgrounds>
```

#### Thanks for checking this out
