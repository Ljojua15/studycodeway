import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'study-code-way-layouts-footer',
  imports: [CommonModule],
  templateUrl: './layouts-footer.component.html',
  styleUrl: './layouts-footer.component.scss'
})
export class LayoutsFooterComponent {
  public openGitLab = false;

  public openGit(){
    this.openGitLab = !this.openGitLab;
  }
}
