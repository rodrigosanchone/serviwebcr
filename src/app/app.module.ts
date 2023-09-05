import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import {provideClientHydration} from '@angular/platform-browser';
import { FormComponent } from './components/form/form.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule,SETTINGS } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environments';
import { ProductsService } from './services/products.service';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    BannerComponent,
    FooterComponent,
    ProductsComponent,
    AboutUsComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule,
  ],
  providers: [provideClientHydration(),ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
