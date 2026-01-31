import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-checkout-page',
  imports: [RouterLink, TranslateModule],
  templateUrl: './checkout.page.html',
  styleUrl: './checkout.page.scss'
})
export class CheckoutPage {
}
