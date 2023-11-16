import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

  const config: SwiperOptions = {
    slidesPerView: 2.4,
    spaceBetween: 30,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  public config = config;

  constructor() {}
}
