import {computed, inject, Injectable, signal} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FLEX_CONFIG} from '../lessons/flex.config';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FlexService {
  private flexConfig:any = FLEX_CONFIG
  public localStorageService = inject(LocalStorageService)
  public $codeControl$ = signal<FormControl>(new FormControl(''))
  public $currentLevel$ = signal<number>(1)



  public flexConfigLength = Object.keys(this.flexConfig).length;

  get currentLesson():any {
    return this.flexConfig[this.$currentLevel$()];
  }

  public $codePlace$ = computed(() => this.currentLesson?.codePlace || []);

  public $movingDivs$ = computed(() => {
    return this.currentLesson?.movingDivs || []
  })

  public $targetDivs$ = computed(() => {
    return this.currentLesson?.targetDivs || [];
  });

  public $targetDivsStyle$ = computed(() => {
    return this.currentLesson?.targetDivsStyle?.[0] || {};
  });


  public $answer$ = computed(() => {
    return this.currentLesson?.answers || [];
  })

  public resetCodeControl() {

    this.$codeControl$().setValue('');
  }

  constructor() {
  }

  public changeLevel(direct : 'prev' | 'next') {
    const nextLevel = direct === 'next' ? this.$currentLevel$() + 1 : this.$currentLevel$() - 1;
    if(nextLevel >= 1 && nextLevel <= this.flexConfigLength) {
      this.$currentLevel$.set(nextLevel)
    }
  }


}
