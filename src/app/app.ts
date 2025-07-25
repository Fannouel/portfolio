import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectLocale } from './components/select-local/select-locale';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SelectLocale
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}
