import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  randomIcon: any;

  constructor(private library: FaIconLibrary) {}

  ngOnInit() {
    this.library.addIconPacks(fas);
  }

  getRandomIcon() {
    const allIcons = Object.keys(this.library['definitions']['fas']);
    const randomChosenIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
    const randomIcon = this.library['definitions']['fas'][randomChosenIcon]['iconName'];
    return randomIcon;
  }

  handleClick() {
    this.randomIcon = null;
    setTimeout(() => {
      this.randomIcon = this.getRandomIcon();
      console.log(this.randomIcon);
    }, 3000);
  }
}
