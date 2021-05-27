import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StoriesComponent } from './stories/stories.component';
import { FeedComponent } from './feed/feed.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [										
    AppComponent,
      NavComponent,
      StoriesComponent,
      FeedComponent,
      SugerenciasComponent,
      MessageComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
