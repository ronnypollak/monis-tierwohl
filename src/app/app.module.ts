import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { StoryComponent } from './story/story.component';
import { TierkommunikationComponent } from './tierkommunikation/tierkommunikation.component';
import { ChannelingComponent } from './channeling/channeling.component';
import { QuantenheilungComponent } from './quantenheilung/quantenheilung.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    ExperiencesComponent,
    StoryComponent,
    TierkommunikationComponent,
    ChannelingComponent,
    QuantenheilungComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
