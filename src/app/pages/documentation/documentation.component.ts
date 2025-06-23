import { Component } from '@angular/core';
import {TechnologiesComponent} from '../../components/technologies/technologies.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'study-code-way-documentation',
  imports: [
    TechnologiesComponent,CommonModule
  ],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent {

}
