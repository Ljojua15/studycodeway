import { Component, OnDestroy, ViewChild} from '@angular/core';
import {LottieComponent} from 'ngx-lottie';

@Component({
  selector: 'study-code-way-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [ LottieComponent]
})
export class NotFoundComponent implements OnDestroy {
  lottieOptions = {
    path: 'assets/images/lottie/not-found.json',
    autoplay: true,
    loop: true
  };

  @ViewChild('lottie', { static: true }) lottieRef!: LottieComponent;


  ngOnDestroy(): void {

    (this.lottieRef as any).animationItem?.destroy();
    console.log(this.lottieRef);
    console.log('💥 Lottie destroyed');

  }


}
