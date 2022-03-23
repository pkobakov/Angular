//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';

//Services
import { MoviesService } from './Services/movies-service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
