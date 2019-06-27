import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, scan, startWith, switchMap} from 'rxjs/operators';
import {from, interval, of, throwError, timer, zip} from 'rxjs';
import {FlickrApiResponse} from './flickr-api-response';
import {FlickrBackgroundsOptions} from './flickr-backgrounds-options';
import {ApiKeyService} from './flickr-backgrounds.token';

@Injectable({
  providedIn: 'root'
})
export class FlickrBackgroundsService {


  constructor(private http: HttpClient, @Inject(ApiKeyService) private flickerApiKey) {
  }

  getPhotos(tags: string, page: string) {

    const url = `https://www.flickr.com/services/rest/`;
    return this.http.get(url, {
      params: new HttpParams({
        fromObject: {
          api_key: this.flickerApiKey,
          method: 'flickr.photos.search',
          tags,
          tag_mode: 'all',
          extras: 'url_l',
          format: 'json',
          nojsoncallback: '1',
          per_page: '20',
          page
        }
      })
    })
      .pipe(
        switchMap((response: any) => {
          if (response.stat === 'fail') {
            return throwError(new Error(response.message));
          } else {
            return of(response);
          }
        })
      );
  }

  getPhotosWithOptions(options: FlickrBackgroundsOptions, page = '1') {
    const {tag} = options;
    const tags = Array.isArray(tag) ? tag.join(', ') : tag;

    return this.getPhotos(tags, page)
      .pipe(
        switchMap((flickrResponse: FlickrApiResponse) => {
          const currentPage = flickrResponse.photos.page;
          const totalPages = flickrResponse.photos.pages;
          const arrayOfPhotos = flickrResponse.photos.photo.filter((photo) => photo.url_l);
          const arrayOfPhotoUrls = arrayOfPhotos
            .map((photo: any) => photo.url_l);

          return zip(
            interval(options.interval * 1000).pipe(startWith(-1)),
            from(arrayOfPhotoUrls)
          )
            .pipe(
              map(([_, url]) => url),
              scan((acc: any, cur: string, index) => {
                // console.log(`page:${page} index:${index} photo:${cur}`);
                if (index + 1 === flickrResponse.photos.photo.length) {
                  return {end: true, url: cur};
                }
                return {end: false, url: cur};
              }, {end: false, url: ''})
            )
            .pipe(
              switchMap(({end, url}) => {
                if (end) {
                  const pageToDo = currentPage === totalPages ? 1 : currentPage + 1;

                  return timer(options.interval * 1000)
                    .pipe(
                      switchMap(() => this.getPhotosWithOptions(options, pageToDo.toString()))
                    )
                    .pipe(
                      startWith(url)
                    );
                }
                return of(url);
              })
            );


        })
      );


  }
}
