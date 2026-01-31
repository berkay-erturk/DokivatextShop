import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';
import { ProductDetailPage } from './pages/products/product-detail.page';
import { CartPage } from './pages/cart/cart.page';
import { CheckoutPage } from './pages/checkout/checkout.page';
import { AccountPage } from './pages/account/account.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: 'products/:id', component: ProductDetailPage },
  { path: 'cart', component: CartPage },
  { path: 'checkout', component: CheckoutPage },
  { path: 'account', component: AccountPage },
  { path: '**', redirectTo: '' }
];
