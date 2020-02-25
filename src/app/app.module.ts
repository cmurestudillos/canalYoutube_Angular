import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Servicio
import { YoutubeService } from 'src/app/services/youtube.service';
// Peticiones del servicio
import { HttpClientModule } from '@angular/common/http';
// Rutas
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    VideoYoutubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
