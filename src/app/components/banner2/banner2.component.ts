import { Component } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component {
  ngOnInit() {
    Aos.init();
  }
}
