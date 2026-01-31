import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-products-page',
  imports: [TranslateModule],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss'
})
export class ProductsPage {
}
