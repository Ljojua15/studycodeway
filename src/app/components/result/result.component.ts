import {Component, effect, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoddingService} from '../../lib/service/codding.service';
import {FlexService} from '../../lib/service/flex.service';

@Component({
  selector: 'display-result',
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  public readonly coddingService = inject(CoddingService)
  public readonly flexService = inject(FlexService)
  public writtenCode!: string

  public testImg = './assets/images/pinki.svg'

  public $movingDivs$ = this.flexService.$movingDivs$

  public $targetDivs$ = this.flexService.$targetDivs$
  public $targetDivsStyle$ = this.flexService.$targetDivsStyle$
  constructor() {
    effect(() => {
      const code = this.coddingService.$myCode$();
      if (code !== null) {
        this.writtenCode = code;
      }
    });

  }

  parseStyle(styleString: string): { [key: string]: string } {
    if(!styleString) return {}

    return styleString
      .split(';')
      .filter(rule => rule.includes(': '))
      .reduce((styleObj: any, rule) => {
        const [key, value] = rule.split(': ');
        styleObj[key.trim()] = value.trim();
        return styleObj;
      }, {});
  }

}
