import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="layout-shell">
      <header class="site-header">
        <div class="container header-inner">
          <div class="brand-block">
            <span class="material-symbols-outlined brand-icon">corporate_fare</span>
            <a class="brand-title" routerLink="/" i18n>TextileStore</a>
            <span class="brand-pill" i18n>B2B</span>
          </div>
          <nav class="nav-links">
            <a routerLink="/products" routerLinkActive="active" i18n>Raw Materials</a>
            <a routerLink="/products" routerLinkActive="active" i18n>Finished Goods</a>
            <a routerLink="/products" routerLinkActive="active" i18n>Hospitality</a>
            <a routerLink="/products" routerLinkActive="active" i18n>Industrial</a>
            <a routerLink="/products" class="highlight" routerLinkActive="active" i18n>Bulk Tiers</a>
          </nav>
          <div class="header-actions">
            <div class="search-box">
              <span class="material-symbols-outlined">search</span>
              <input placeholder="Search wholesale catalog..." i18n-placeholder />
            </div>
            <button class="primary-btn" i18n>Become a Partner</button>
            <div class="account-block">
              <button class="icon-btn" routerLink="/cart" aria-label="Orders">
                <span class="material-symbols-outlined">orders</span>
              </button>
              <div class="avatar"></div>
            </div>
          </div>
        </div>
      </header>

      <main class="content">
        <router-outlet></router-outlet>
      </main>

      <footer class="site-footer">
        <div class="container footer-top">
          <div class="footer-brand">
            <div class="brand-block">
              <span class="material-symbols-outlined brand-icon">corporate_fare</span>
              <span class="brand-title" i18n>TextileStore</span>
              <span class="brand-pill" i18n>B2B</span>
            </div>
            <p i18n>
              The leading global platform for professional textile sourcing. Bridging the gap between artisanal quality
              and industrial scale.
            </p>
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
              <h4 i18n>Wholesale</h4>
              <a href="#" i18n>Bulk New Arrivals</a>
              <a href="#" i18n>Wholesale Best Sellers</a>
              <a href="#" i18n>MoQ & Tiers</a>
              <a href="#" i18n>Sample Kits</a>
            </div>
            <div>
              <h4 i18n>B2B Services</h4>
              <a href="#" i18n>Custom Dyeing</a>
              <a href="#" i18n>White Labeling</a>
              <a href="#" i18n>Freight Solutions</a>
              <a href="#" i18n>Line of Credit</a>
            </div>
            <div>
              <h4 i18n>B2B Insights</h4>
              <p i18n>Market trends and textile reports delivered weekly.</p>
              <div class="newsletter">
                <input placeholder="Work email address" i18n-placeholder type="email" />
                <button i18n>GET INDUSTRY UPDATES</button>
              </div>
            </div>
          </div>
        </div>
        <div class="container footer-bottom">
          <p i18n>© 2024 TextileStore Wholesale Division. ISO 9001 Certified.</p>
          <div class="footer-links">
            <a href="#" i18n>Supplier Terms</a>
            <a href="#" i18n>Compliance</a>
            <a href="#" i18n>Global Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrl: './main-layout.scss'
})
export class MainLayout {
}
