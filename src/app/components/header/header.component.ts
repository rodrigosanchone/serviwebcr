import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   cerrar() {
    
    let navbar = document.querySelector(".navbar-toggler") as HTMLButtonElement;
    navbar!.click();
  }
}
