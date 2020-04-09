import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

  @Input() slides;

  numberSlides = 1;

  currentSlide = 1;

  constructor() { }

  // showSlides() {
  //   for (let i = 0; i < this.numberSlides; i++) {
  //     this.currentSlide.push(i);
  //   }
  // }

  onPreviousClick() {

    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;




    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    // console.log(this.currentSlide);
    // let i = this.numberSlides;
    // while (i > 0) {
    //   let nextSlide = this.currentSlide[this.currentSlide.length - 1] + 1;
    //   console.log(nextSlide);
    //
    //   console.log(nextSlide < this.slides.length - 1);
    //   if (nextSlide < this.slides.length - 1) {
    //     this.currentSlide.push(nextSlide);
    //     this.currentSlide.shift();
    //     i--;
    //   } else {
    //     for (let j = 0; j < i; j++) {
    //       this.currentSlide.push(j);
    //       this.currentSlide.shift();
    //     }
    //     break;
    //   }
    // }
    // console.log(this.currentSlide);


    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length  ? 0 : next;

    console.log('next  clicked, new current slide is: ', this.currentSlide);
  }

  ngOnInit() {
    // this.showSlides();
  }

}
