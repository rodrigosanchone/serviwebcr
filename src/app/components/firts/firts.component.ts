import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firts',
  templateUrl: './firts.component.html',
  styleUrls: ['./firts.component.css']
})
export class FirtsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
