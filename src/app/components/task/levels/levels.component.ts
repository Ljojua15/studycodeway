import {AfterViewInit, Component, computed, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexService} from '../../../lib/service/flex.service';
import {LocalStorageService} from '../../../lib/service/local-storage.service';
import {LevelsModalComponent} from './levels-modal/levels-modal.component';

@Component({
  selector: 'display-levels',
  imports: [
    LevelsModalComponent,
    CommonModule,
    LevelsModalComponent
  ],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.scss'
})
export class LevelsComponent implements AfterViewInit{
  public flexService = inject(FlexService)
  public localStorageService = inject(LocalStorageService)

  public readonly $isLevelOpens$ = signal<boolean>(false);

  constructor() {

  }
  ngAfterViewInit(): void {
    this.reloadData()
  }


  public $currentLevel$ = computed(()=>{
    return this.flexService.$currentLevel$();
  })

  public $quantityOfLessons$ = computed(()=>{
    return this.flexService.flexConfigLength;
  })

  public changeLevel(direction: 'prev' | 'next') {
    this.flexService.changeLevel(direction);
    this.flexService.resetCodeControl()
    this.reloadData()
  }

  public openLevelPopup(){
    this.$isLevelOpens$.update((prev) => !prev);
  }

  private reloadData() {
    const data = this.localStorageService.getLocalStorage()
    const currentLevel = data.find(d => d.id === this.flexService.$currentLevel$());
      this.flexService.$codeControl$().setValue(currentLevel?.code);
    }


}
