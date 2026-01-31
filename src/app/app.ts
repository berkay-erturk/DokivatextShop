import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainLayout } from './layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('tr');
    this.translate.use('tr');
  }
}
