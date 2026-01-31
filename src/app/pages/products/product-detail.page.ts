import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-product-detail-page',
  imports: [CommonModule, RouterLink, CardModule, ButtonModule, InputNumberModule, FormsModule],
  template: `
    <a routerLink="/products" class="back-link" i18n>← Urunlere Don</a>

    <div class="detail-grid">
      <p-card>
        <ng-template pTemplate="title" i18n>Urun Detayi</ng-template>
        <ng-template pTemplate="content">
          <div class="detail-name">{{ productName }}</div>
          <div class="detail-meta" i18n>Adet bazli fiyatlandirma. Kilo bilgisi bilgilendirme amaclidir.</div>
          <div class="detail-price">{{ 32.5 | currency: 'EUR' }}</div>
          <div class="detail-actions">
            <label for="qty" i18n>Adet</label>
            <p-inputNumber inputId="qty" [(ngModel)]="quantity" [min]="1" [showButtons]="true"></p-inputNumber>
            <button pButton icon="pi pi-shopping-cart" i18n-label label="Sepete Ekle"></button>
          </div>
        </ng-template>
      </p-card>
      <div class="detail-info">
        <h3 i18n>Detaylar</h3>
        <ul>
          <li i18n>1 adet = 0.5 kg</li>
          <li i18n>Minimum siparis 30 kg</li>
          <li i18n>Guvenli paketleme</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .back-link {
        display: inline-block;
        margin-bottom: 1.5rem;
        color: #2563eb;
      }

      .detail-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 2rem;
        align-items: start;
      }

      .detail-name {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .detail-meta {
        color: #6b7280;
        margin-bottom: 1rem;
      }

      .detail-price {
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .detail-actions {
        display: grid;
        gap: 0.75rem;
        align-items: center;
      }
    `
  ]
})
export class ProductDetailPage {
  quantity = 1;

  constructor(private route: ActivatedRoute) {}

  get productName() {
    return this.route.snapshot.paramMap.get('id')
      ? `Urun #${this.route.snapshot.paramMap.get('id')}`
      : 'Urun';
  }
}
