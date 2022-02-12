import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-homeheading',
  templateUrl: './homeheading.component.html',
  styleUrls: ['./homeheading.component.scss']
})
export class HomeheadingComponent implements OnInit {
  imgSrc:string="https://image.tmdb.org/t/p/w500";
  @Input()TrendingMovies:any[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    margin:8,
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
