import {Component, computed, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexService} from '../../../lib/service/flex.service';

@Component({
  selector: 'display-example',
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  public lessonsService = inject(FlexService);
  public $changedText$ =  computed(() => {
    return this.lessonsService.currentLesson?.texts
  })
}
