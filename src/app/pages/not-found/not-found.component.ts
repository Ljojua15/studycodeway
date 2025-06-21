import { Component } from '@angular/core';
import {LottieComponent} from 'ngx-lottie';

@Component({
  selector: 'study-code-way-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [ LottieComponent]
})
export class NotFoundComponent {
  lottieOptions = {
    path: 'assets/images/lottie/not-found.json',
    autoplay: true,
    loop: true
  };
}
