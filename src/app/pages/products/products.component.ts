import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatGridListModule],
  template: `
    <div class="products-page">
      <div class="page-header">
        <h1>Products</h1>
        <button mat-raised-button color="primary">
          <mat-icon>add</mat-icon>
          Add Product
        </button>
      </div>

      <mat-grid-list [cols]="cols" rowHeight="380px" gutterSize="16">
        <mat-grid-tile *ngFor="let product of products">
          <mat-card class="product-card">
            <div class="product-image">
              <mat-icon>inventory_2</mat-icon>
            </div>
            <mat-card-header>
              <mat-card-title>{{product.name}}</mat-card-title>
              <mat-card-subtitle>{{product.category}}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="product-info">
                <div class="price">\${{product.price}}</div>
                <div class="stock" [class.low-stock]="product.stock < 20">
                  Stock: {{product.stock}}
                </div>
              </div>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary">
                <mat-icon>edit</mat-icon>
                Edit
              </button>
              <button mat-button color="warn">
                <mat-icon>delete</mat-icon>
                Delete
              </button>
            </mat-card-actions>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [`
    .products-page h1 {
      margin: 0;
      color: #333;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .product-card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .product-image {
      width: 100%;
      height: 180px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }

    .product-image mat-icon {
      font-size: 80px;
      width: 80px;
      height: 80px;
      color: #999;
    }

    .product-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
    }

    .price {
      font-size: 24px;
      font-weight: bold;
      color: #3f51b5;
    }

    .stock {
      padding: 4px 12px;
      background-color: #e8f5e9;
      color: #4caf50;
      border-radius: 4px;
      font-size: 14px;
    }

    .stock.low-stock {
      background-color: #ffebee;
      color: #f44336;
    }

    @media (max-width: 768px) {
      .page-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .page-header h1 {
        font-size: 24px;
      }
    }
  `]
})
export class ProductsComponent {
  cols = 3;
  products: Product[] = [
    { id: 1, name: 'Laptop Pro', price: 1299, category: 'Electronics', stock: 45, image: '' },
    { id: 2, name: 'Wireless Mouse', price: 29, category: 'Accessories', stock: 120, image: '' },
    { id: 3, name: 'Mechanical Keyboard', price: 89, category: 'Accessories', stock: 67, image: '' },
    { id: 4, name: '4K Monitor', price: 449, category: 'Electronics', stock: 15, image: '' },
    { id: 5, name: 'USB-C Hub', price: 39, category: 'Accessories', stock: 89, image: '' },
    { id: 6, name: 'Desk Lamp', price: 45, category: 'Office', stock: 34, image: '' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
          this.cols = 1;
        } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
          this.cols = 2;
        } else {
          this.cols = 3;
        }
      });
  }
}