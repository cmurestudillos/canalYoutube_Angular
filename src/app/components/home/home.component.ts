import { Component, OnInit } from '@angular/core';
// Sercvicio
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos:any[] = [];
  videoSel:any;

  constructor( public _youtubesrv: YoutubeService) {
    this._youtubesrv.getVideos()
        .subscribe( data => { this.videos = data; });
   }

  ngOnInit() {
  }

  verVideo(video:any){
    this.videoSel = video;
    $("#myModal").modal();
  }

  cerrarVideo(){
    this.videoSel = null;
    $("#myModal").modal('hide');
  }

  cargarMas(){
    this._youtubesrv.getVideos()
    .subscribe( data => { this.videos.push.apply(this.videos, data) });
  }

}
