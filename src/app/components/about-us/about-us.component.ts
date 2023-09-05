import { Component } from '@angular/core';
import {trigger,style, transition,animate,state} from '@angular/animations'
import * as Aos from 'aos';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations:[trigger('enterState',[
    state('void',style({transform:'translateX(-100%)', opacity:0})),
    transition(':enter',[
      animate(3000, style({transform:'translateX(0)',opacity:1}))
    ])
  ])]
})
export class AboutUsComponent {
  ngOnInit() {
    Aos.init();
  }
}
