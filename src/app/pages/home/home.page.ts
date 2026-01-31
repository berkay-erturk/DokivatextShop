import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [TranslateModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {}
