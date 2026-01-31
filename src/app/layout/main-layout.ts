import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslateModule],
  template: `
    <div class="layout-shell">
      <header class="site-header">
        <div class="container header-inner">
          <div class="brand-block">
            <span class="material-symbols-outlined brand-icon">corporate_fare</span>
            <a class="brand-title" routerLink="/">{{ 'brand.name' | translate }}</a>
            <span class="brand-pill">{{ 'brand.b2b' | translate }}</span>
          </div>
          <nav class="nav-links">
            <a routerLink="/products" routerLinkActive="active">{{ 'nav.rawMaterials' | translate }}</a>
            <a routerLink="/products" routerLinkActive="active">{{ 'nav.finishedGoods' | translate }}</a>
            <a routerLink="/products" routerLinkActive="active">{{ 'nav.hospitality' | translate }}</a>
            <a routerLink="/products" routerLinkActive="active">{{ 'nav.industrial' | translate }}</a>
            <a routerLink="/products" class="highlight" routerLinkActive="active">{{ 'nav.bulkTiers' | translate }}</a>
          </nav>
          <div class="header-actions">
            <div class="search-box">
              <span class="material-symbols-outlined">search</span>
              <input [placeholder]="'header.searchPlaceholder' | translate" />
            </div>
            <button class="primary-btn">{{ 'header.partnerButton' | translate }}</button>
            <div class="account-block">
              <button class="icon-btn" routerLink="/cart" [attr.aria-label]="('header.ordersLabel' | translate)">
                <span class="material-symbols-outlined">orders</span>
              </button>
              <div class="avatar"></div>
            </div>
          </div>
        </div>
      </header>

      <main class="content">
        <div class="container content-inner">
          <router-outlet></router-outlet>
        </div>
      </main>

      <footer class="site-footer">
        <div class="container footer-top">
          <div class="footer-brand">
            <div class="brand-block">
              <span class="material-symbols-outlined brand-icon">corporate_fare</span>
              <span class="brand-title">{{ 'brand.name' | translate }}</span>
              <span class="brand-pill">{{ 'brand.b2b' | translate }}</span>
            </div>
            <p>{{ 'footer.description' | translate }}</p>
            <div class="social-links">
              <a href="#" aria-label="Business">
                <span class="material-symbols-outlined">business_center</span>
              </a>
              <a href="#" aria-label="Mail">
                <span class="material-symbols-outlined">mail</span>
              </a>
              <a href="#" aria-label="Map">
                <span class="material-symbols-outlined">map</span>
              </a>
            </div>
          </div>
          <div class="footer-columns">
            <div>
              <h4>{{ 'footer.wholesale' | translate }}</h4>
              <a href="#">{{ 'footer.bulkArrivals' | translate }}</a>
              <a href="#">{{ 'footer.bestSellers' | translate }}</a>
              <a href="#">{{ 'footer.moqTiers' | translate }}</a>
              <a href="#">{{ 'footer.sampleKits' | translate }}</a>
            </div>
            <div>
              <h4>{{ 'footer.services' | translate }}</h4>
              <a href="#">{{ 'footer.customDyeing' | translate }}</a>
              <a href="#">{{ 'footer.whiteLabel' | translate }}</a>
              <a href="#">{{ 'footer.freight' | translate }}</a>
              <a href="#">{{ 'footer.creditLine' | translate }}</a>
            </div>
            <div>
              <h4>{{ 'footer.insights' | translate }}</h4>
              <p>{{ 'footer.insightsDesc' | translate }}</p>
              <div class="newsletter">
                <input [placeholder]="'footer.emailPlaceholder' | translate" type="email" />
                <button>{{ 'footer.getUpdates' | translate }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>{{ 'footer.copyright' | translate }}</p>
          <div class="footer-links">
            <a href="#">{{ 'footer.supplierTerms' | translate }}</a>
            <a href="#">{{ 'footer.compliance' | translate }}</a>
            <a href="#">{{ 'footer.privacy' | translate }}</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrl: './main-layout.scss'
})
export class MainLayout {
}
