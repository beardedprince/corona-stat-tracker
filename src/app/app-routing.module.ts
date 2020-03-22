import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsFeedComponent},
  {path: 'news/:id', component: NewsFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
