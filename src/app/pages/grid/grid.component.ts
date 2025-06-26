import {Component, effect, inject} from '@angular/core';
import {DeskComponent} from '../../components/grid/desk/desk.component';
import {GameComponent} from '../../components/grid/game/game.component';
import {CodeComponent} from '../../components/grid/code/code.component';
import {ProgressComponent} from '../../components/grid/progress/progress.component';
import {DebugComponent} from '../../components/grid/debug/debug.component';
import {GridService} from '../../lib/service/grid.service';

@Component({
  selector: 'study-code-way-grid',
  imports: [
    DeskComponent,
    GameComponent,
    CodeComponent,
    ProgressComponent,
    DebugComponent
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  public gridService = inject(GridService)

  constructor() {
    effect(() => {
      console.log('GridComponent initialized');
    })
  }

}
