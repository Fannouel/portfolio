

import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-select-locale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-locale.html',
  styleUrl: './select-locale.scss'
})
export class SelectLocale {

  @Input() public dropDirection = 'down';

  public locales: { [key: string]: string } = {
    'en': 'English',
    'fr': 'Français',
  }
  private defaultLocale: string = 'fr';

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  public changeLocale(locale: string): void {
    // language is at the first position in the path
    var path = window.location.pathname;
    var pathArray = path.split('/');
    if(Object.keys(this.locales).indexOf(locale) === -1) {
      locale = this.defaultLocale;
    }

    if(Object.keys(this.locales).indexOf(pathArray[1]) !== -1) {
      pathArray[1] = locale;
    } else {
      // Add locale to path
      pathArray.splice(1, 0, locale);
    }

    var newPathname = pathArray.join('/');
    window.location.pathname = newPathname;
  }

}

