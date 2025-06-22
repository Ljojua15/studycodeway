import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CARDS_CONFIG} from '../../lib/configs/cards.config';
import {INFORMATION_CONFIG} from '../../lib/configs/information.config';

@Component({
  selector: 'study-code-way-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 public cardsConfig = CARDS_CONFIG;
 public informationConfig = INFORMATION_CONFIG
}
