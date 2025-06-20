import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {isMobile} from '../../lib/functions/mobile.function';
import {ROUTES_HEADER_CONFIG} from '../../lib/configs/routes.config';

@Component({
  selector: 'study-code-way-layouts-header',
  imports: [CommonModule],
  templateUrl: './layouts-header.component.html',
  styleUrl: './layouts-header.component.scss'
})
export class LayoutsHeaderComponent {

  public headerRoutes = ROUTES_HEADER_CONFIG

  public  menuOpen = false;

  public toggleMenu(): void {
    console.log('test')
    this.menuOpen = !this.menuOpen;
  }

  protected readonly isMobile = isMobile;
}
