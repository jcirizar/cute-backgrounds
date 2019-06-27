export interface FlickrApiResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: any[];
    total: string;
  };
  stat: 'ok';
}
