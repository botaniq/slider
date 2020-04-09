import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  now: Date = new Date();

  public slides = [
    { src: 'https://images.pexels.com/photos/3523688/pexels-photo-3523688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { src: 'https://images.pexels.com/photos/3505019/pexels-photo-3505019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { src: 'https://images.pexels.com/photos/3485646/pexels-photo-3485646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { src: 'https://images.pexels.com/photos/3422694/pexels-photo-3422694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { src: 'https://images.pexels.com/photos/1090932/pexels-photo-1090932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { src: 'https://images.pexels.com/photos/907981/pexels-photo-907981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { src: 'https://images.pexels.com/photos/2047420/pexels-photo-2047420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { src: 'https://images.pexels.com/photos/892702/pexels-photo-892702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }
  ];

}

