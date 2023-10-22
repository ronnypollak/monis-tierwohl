import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home` route
  { path: 'erfahrungen', component: ExperiencesComponent },
  { path: 'dienstleistungen', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
