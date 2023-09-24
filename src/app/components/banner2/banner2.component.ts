import { Component, HostListener  } from '@angular/core';


@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css'],
 
})



export class Banner2Component {

  ngOnInit(){
   
 
  }
 
   @HostListener("window:scroll", [])
   onWindowScroll(){
   
    /* let scrollPosition = window.scrollY;
    console.log(scrollPosition) */
     
     let bgDarkGray1 = document.querySelector(".bgDarkGray-1") as HTMLButtonElement;
     let bgDarkGray2 = document.querySelector(".bgDarkGray-2") as HTMLButtonElement;
    
 
     window.addEventListener("scroll", () => {
       if (window.scrollY > 2100) {
        bgDarkGray1.classList.add('left');
        bgDarkGray2.classList.add('rigth');
        
       }else{
        bgDarkGray1.classList.remove('left');
        bgDarkGray2.classList.remove('rigth');
       }
        
     });
   
   
   } 

   
}