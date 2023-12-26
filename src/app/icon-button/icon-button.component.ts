import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  randomIconName: IconName | null = null;

  constructor(private library: FaIconLibrary) {}

  ngOnInit() {
    this.library.addIconPacks(fas);
  }

  getRandomIcon() {
    const allIcons = Object.keys(this.library['definitions']['fas']);
    const randomIconNumber = allIcons[Math.floor(Math.random() * allIcons.length)];
    const randomIconName = this.library['definitions']['fas'][randomIconNumber]['iconName'];
    return randomIconName;
  }

  handleClick() {
    this.randomIconName = null;
    setTimeout(() => {
      this.randomIconName = this.getRandomIcon();
    }, 3000);
  }
}
