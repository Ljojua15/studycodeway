import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {INFORMATION_CONFIG} from "../../lib/configs/information.config";

@Component({
  selector: 'study-code-way-home-info',
  imports: [CommonModule],
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.scss'
})
export class HomeInfoComponent {
  @Input() info: any;


    protected readonly informationConfig = INFORMATION_CONFIG;
}
