import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  standalone: true,
  selector: 'app-account-page',
  imports: [CommonModule, CardModule, ButtonModule, TableModule],
  template: `
    <h2 i18n>Hesabim</h2>
    <div class="account-grid">
      <p-card>
        <ng-template pTemplate="title" i18n>Profil</ng-template>
        <ng-template pTemplate="content">
          <div class="profile">
            <div>
              <div class="label" i18n>Ad Soyad</div>
              <div>Berka Erturk</div>
            </div>
            <div>
              <div class="label" i18n>E-posta</div>
              <div>berka@example.com</div>
            </div>
            <button pButton class="p-button-outlined mt-2" icon="pi pi-pencil" i18n-label label="Duzenle"></button>
          </div>
        </ng-template>
      </p-card>
      <p-card>
        <ng-template pTemplate="title" i18n>Son Siparisler</ng-template>
        <ng-template pTemplate="content">
          <p-table [value]="orders">
            <ng-template pTemplate="header">
              <tr>
                <th i18n>Siparis</th>
                <th i18n>Tarih</th>
                <th i18n>Durum</th>
              </tr>
            </ng-template>
            <ng-template pTemplate="body" let-order>
              <tr>
                <td>#{{ order.id }}</td>
                <td>{{ order.date }}</td>
                <td>{{ order.status }}</td>
              </tr>
            </ng-template>
          </p-table>
        </ng-template>
      </p-card>
    </div>
  `,
  styles: [
    `
      .account-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 2rem;
      }

      .profile {
        display: grid;
        gap: 0.75rem;
      }

      .label {
        font-size: 0.85rem;
        color: #6b7280;
      }
    `
  ]
})
export class AccountPage {
  orders = [
    { id: '1092', date: '2026-01-25', status: 'PAID' },
    { id: '1091', date: '2026-01-20', status: 'SHIPPED' }
  ];
}
