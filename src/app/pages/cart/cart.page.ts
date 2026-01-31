import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-cart-page',
  imports: [RouterLink, TranslateModule],
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.scss'
})
export class CartPage {
}
