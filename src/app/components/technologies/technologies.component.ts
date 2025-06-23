import {Component, Input} from '@angular/core';

@Component({
  selector: 'study-code-way-technologies',
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
@Input() techno: any;
}
