import {computed, effect, Injectable, signal} from '@angular/core';
import {gridLevels} from '../interface/grid.interface';
import {GRID_CONFIG} from '../lessons/grid.config';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public gridLessons : gridLevels[] = GRID_CONFIG

  public  readonly $activeIndex$ = signal(0)

  public $gridLessonsLength$ = computed(() => {
    return this.gridLessons ? this.gridLessons.length : 0;
  })

  public $plants$ = computed(() => {
    return this.gridLessons[3].plantPositions.map((x) => x.plant)
  })

  constructor() {
    effect(() => {
      console.log(this.gridLessons[0].initialCSS);
    });
  }



}
