import {Component, computed, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexService} from '../../../../lib/service/flex.service';
import {LocalStorageService} from '../../../../lib/service/local-storage.service';

@Component({
  selector: 'display-levels-modal',
  imports: [CommonModule],
  templateUrl: './levels-modal.component.html',
  styleUrl: './levels-modal.component.scss'
})
export class LevelsModalComponent {
  public readonly flexService = inject(FlexService)
  public readonly localStorageService = inject(LocalStorageService)
  public readonly idOfExamples:number[] = []
  public readonly $isLevelChanged$ = signal(false)


  constructor() {
    this.idOfExamples = Array.from({ length: this.flexService.flexConfigLength}, (_, i) => i+1);
  }

  public $activeItem$ = computed(() => {
    return this.flexService.$currentLevel$()
  })

  public changeLevelFromButton(id:number){
    const data = this.localStorageService.getLocalStorage()
    this.$isLevelChanged$.set(true)
    this.flexService.$currentLevel$.set(id);
    const currentLevel = data.find(d => d.id === id);
    this.flexService.$codeControl$().setValue(currentLevel?.code);
  }

  public reset(){
    this.localStorageService.clearAllStorage()
    this.flexService.resetCodeControl()
  }
}
