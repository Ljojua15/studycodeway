import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'study-code-way-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  readonly rows = 5;
  readonly cols = 5;

  grid = Array(this.rows * this.cols).fill(null);

  waterPosition = signal({ row: 1, col: 1 });
  plantPosition = signal({ row: 1, col: 3 });

  private getIndex(row: number, col: number): number {
    console.log((row - 1) * this.cols + (col - 1))
    return (row - 1) * this.cols + (col - 1);
  }

  waterIndex = computed(() =>
    this.getIndex(this.waterPosition().row, this.waterPosition().col)
  );

  plantIndex = computed(() =>
    this.getIndex(this.plantPosition().row, this.plantPosition().col)
  );
}
