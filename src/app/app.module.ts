import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ReactiveFormsModule } from '@angular/forms';
import { BannerBlogComponent } from './components/banner-blog/banner-blog.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { ValuesComponent } from './components/values/values.component';
import { FirtsComponent } from './components/firts/firts.component';
import { Banner3Component } from './components/banner3/banner3.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { register } from 'swiper/element/bundle';

register();


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    BannerComponent,
    FooterComponent,
    ProductsComponent,
    AboutUsComponent,
    ProyectsComponent,
    BannerBlogComponent,
    Banner2Component,
    ValuesComponent,
    FirtsComponent,
    Banner3Component,
    PrincipalComponent,
 
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [provideClientHydration(),ProductsService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
