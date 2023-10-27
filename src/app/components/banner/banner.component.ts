import { Component, Input } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  ngOnint(){
    Aos.init();
  }
}
