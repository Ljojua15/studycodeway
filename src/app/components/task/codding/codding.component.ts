import {Component, computed, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {debounceTime} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import {CoddingService} from '../../../lib/service/codding.service';
import {FlexService} from '../../../lib/service/flex.service';
import {LocalStorageService} from '../../../lib/service/local-storage.service';

@Component({
  selector: 'display-codding',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './codding.component.html',
  styleUrl: './codding.component.scss'
})
export class CoddingComponent implements OnInit {
  @Output() public resetTextareaEvent = new EventEmitter<void>();

  public readonly coddingService = inject(CoddingService);
  private readonly flexService  = inject(FlexService)
  private readonly localStorageService  = inject(LocalStorageService)

  public $code$ = this.flexService.$codeControl$;
  public $codePlace$ = this.flexService.$codePlace$;

  public sessionArray = []

  ngOnInit(){
    this.$code$().valueChanges.pipe(debounceTime(100)).subscribe(value => {
      this.coddingService.$myCode$.set(this.$code$().value);
    });
  }

  public $isCorrect$ = computed(() => {
    return this.coddingService.isCodeCorrect()
  })


  public enterCode(direction: 'done'): void {
    if (this.flexService.$currentLevel$() < this.flexService.flexConfigLength) {
      const value = this.$code$().value;
      if (!value) return;

      const currentLevel = this.flexService.$currentLevel$();
      const data = this.localStorageService.getLocalStorage<any>('flex') || [];

      const filteredData = data.filter((entry: { id: number; }) => entry.id !== currentLevel);
      const newData = [...filteredData, { id: currentLevel, code: value }];

      this.localStorageService.setLocalStorage('flex', newData);
      this.coddingService.enterMyCode(direction);
    }
  }
}
