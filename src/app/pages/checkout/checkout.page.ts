import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-checkout-page',
  imports: [CommonModule, CardModule, ButtonModule, InputTextModule, FormsModule],
  template: `
    <h2 i18n>Odeme</h2>
    <div class="checkout-grid">
      <p-card>
        <ng-template pTemplate="title" i18n>Teslimat Bilgileri</ng-template>
        <ng-template pTemplate="content">
          <div class="form-grid">
            <label i18n>Ad Soyad</label>
            <input pInputText [(ngModel)]="name" />
            <label i18n>Telefon</label>
            <input pInputText [(ngModel)]="phone" />
            <label i18n>Adres</label>
            <input pInputText [(ngModel)]="address" />
          </div>
        </ng-template>
      </p-card>
      <p-card>
        <ng-template pTemplate="title" i18n>Odeme Ozeti</ng-template>
        <ng-template pTemplate="content">
          <div class="summary">
            <div>
              <span i18n>Ara Toplam</span>
              <strong>{{ 557 | currency: 'EUR' }}</strong>
            </div>
            <div>
              <span i18n>Kargo</span>
              <strong i18n>Ucretsiz</strong>
            </div>
            <div>
              <span i18n>Toplam</span>
              <strong>{{ 557 | currency: 'EUR' }}</strong>
            </div>
          </div>
          <button pButton class="w-full mt-3" icon="pi pi-check" i18n-label label="Siparisi Onayla"></button>
        </ng-template>
      </p-card>
    </div>
  `,
  styles: [
    `
      .checkout-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 2rem;
      }

      .form-grid {
        display: grid;
        gap: 0.75rem;
      }

      .summary {
        display: grid;
        gap: 0.75rem;
      }

      .summary div {
        display: flex;
        justify-content: space-between;
      }
    `
  ]
})
export class CheckoutPage {
  name = '';
  phone = '';
  address = '';
}
