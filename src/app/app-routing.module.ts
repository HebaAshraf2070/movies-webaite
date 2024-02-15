import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full", title: "movies/home" },
  { path: "home", component: HomeComponent, title: "movies/home" },
  { path: "movies", component: MoviesComponent, title: "movies/movies" },
  { path: "contact", component: ContactComponent, title: "movies/contact" },
  { path: "**", component: ErrorComponent, title: "movies/error" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
