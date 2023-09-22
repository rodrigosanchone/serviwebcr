import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirtsComponent } from './components/firts/firts.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  
  {path:``,component:HeaderComponent},
  {path:`inicio`,component:HeaderComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
