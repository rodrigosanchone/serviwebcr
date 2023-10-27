import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirtsComponent } from './components/firts/firts.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [

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
