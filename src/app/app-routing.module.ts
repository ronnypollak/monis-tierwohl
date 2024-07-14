import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ServicesComponent } from './services/services.component';
import { StoryComponent } from './story/story.component';
import { TierkommunikationComponent } from './tierkommunikation/tierkommunikation.component';
import { ChannelingComponent } from './channeling/channeling.component';
import { QuantenheilungComponent } from './quantenheilung/quantenheilung.component';
import { BuchenComponent } from './buchen/buchen.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home` route
  { path: 'erfahrungen', component: ExperiencesComponent },
  { path: 'dienstleistungen', component: ServicesComponent },
  { path: 'geschichte', component: StoryComponent },
  {
    path: 'dienstleistungen/tierkommunikation',
    component: TierkommunikationComponent,
  },
  {
    path: 'dienstleistungen/channeling',
    component: ChannelingComponent,
  },
  {
    path: 'dienstleistungen/quantenheilung',
    component: QuantenheilungComponent,
  },
  {
    path: 'dienstleistungen/buchen',
    component: BuchenComponent,
  },
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
