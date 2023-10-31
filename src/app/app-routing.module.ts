import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirtsComponent } from './components/firts/firts.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
const routes: Routes = [
  {
    path: 'sitemap.xml',
    component: SitemapComponent
  },
  {path:``,component:FirtsComponent},
  {path:`inicio`,component:FirtsComponent},
 /*  {path:`blog`, component:BlogComponent}, */
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
