import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    anime({
      targets: '#name-svg-path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 9000,
      delay: function (el, i) {
        return i * 200;
      },
      direction: 'alternate',
      loop: false,
    });
    anime({
      targets: '#angular',
      translateX: -100,
      direction: 'reverse',
      easing: 'easeInOutSine',
    });
    anime({
      targets: '#express',
      translateX: -200,
      direction: 'reverse',
      easing: 'easeInOutSine',
    });
    anime({
      targets: '#node',
      translateX: -300,
      direction: 'reverse',
      easing: 'easeInOutSine',
    });
    anime({
      targets: '#mysql',
      translateX: -400,
      direction: 'reverse',
      easing: 'easeInOutSine',
    });
    anime({
      targets: '#full-stack',
      translateX: -500,
      direction: 'reverse',
      easing: 'easeInOutSine',
    });
  }
}
