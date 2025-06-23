import { Component } from '@angular/core';
import {TaskComponent} from '../../components/task/task.component';
import {ResultComponent} from '../../components/result/result.component';

@Component({
  selector: 'study-code-way-flex-box',
  imports: [
    TaskComponent,
    ResultComponent
  ],
  templateUrl: './flex-box.component.html',
  styleUrl: './flex-box.component.scss'
})
export class FlexBoxComponent {

}
