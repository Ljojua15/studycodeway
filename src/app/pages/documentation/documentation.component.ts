import { Component } from '@angular/core';
import {TechnologiesComponent} from '../../components/technologies/technologies.component';
import {CommonModule} from '@angular/common';
import {TECHNO_CONFIG} from '../../lib/configs/technologies.config';

@Component({
  selector: 'study-code-way-documentation',
  imports: [
    TechnologiesComponent,CommonModule
  ],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent {
 public technologies = TECHNO_CONFIG;

 public comeSoon: boolean = false;

 public soon(){
   this.comeSoon = !this.comeSoon;
 };
}
