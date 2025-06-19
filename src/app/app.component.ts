import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutsHeaderComponent} from './layouts/layouts-header/layouts-header.component';

@Component({
  selector: 'app-root',
  imports: [
    LayoutsHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'studycodeway';
}
