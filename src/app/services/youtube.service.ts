import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youtubeUrl:string ="https://www.googleapis.com/youtube/v3";
  apiKey:string="AIzaSyD_J1ogIrRBJVqRyWqT6unCEPwuWyq9CzY";
  playlistId:string="PLCKuOXG0bPi3BgwQtFr4bHnNvdWl2tTJ8";
  nextPageToken:string="";

  constructor( public http: HttpClient) { }

  getVideos(){
    // Montamos la url para mostar datos del servicio
    let url = `${ this.youtubeUrl }/playlistItems/`;

    let params = new HttpParams().set('part', 'snippet')
                                 .set('maxResults', '3')
                                 .set('playlistId', this.playlistId )
                                 .set('key', this.apiKey )
                                 .set('pageToken',this.nextPageToken);


    // if( this.nextPageToken ){
    //   params.set('pageToken', this.nextPageToken );
    // }

    // Peticion del servicio
    return this.http.get(url, { params: params } )
          .pipe(map( (data:any) => {
            console.log(data);

            this.nextPageToken = data.nextPageToken;

            let videos: any[] = [];
            for ( let video of data.items) {
              let snippet = video.snippet;
              videos.push(snippet);
            }

            return videos;
          }
        )
      );
  }

}
