import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutsHeaderComponent} from './layouts/layouts-header/layouts-header.component';
import {LayoutsFooterComponent} from './layouts/layouts-footer/layouts-footer.component';
import {LayoutsBodyComponent} from './layouts/layouts-body/layouts-body.component';

@Component({
  selector: 'app-root',
  imports: [
    LayoutsHeaderComponent,
    LayoutsFooterComponent,
    LayoutsBodyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'studycodeway';
}
