import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule],
  template: `
    <div class="dashboard-page">
      <h1>Dashboard Overview</h1>
      
      <mat-grid-list [cols]="cols" rowHeight="150px" gutterSize="16">
        <mat-grid-tile>
          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-icon">
                <mat-icon>people</mat-icon>
              </div>
              <div class="stat-info">
                <h3>Total Users</h3>
                <p class="stat-number">2,543</p>
                <span class="stat-change positive">+12%</span>
              </div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>

        <mat-grid-tile>
          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-icon revenue">
                <mat-icon>attach_money</mat-icon>
              </div>
              <div class="stat-info">
                <h3>Revenue</h3>
                <p class="stat-number">$45,678</p>
                <span class="stat-change positive">+8%</span>
              </div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>

        <mat-grid-tile>
          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-icon orders">
                <mat-icon>shopping_cart</mat-icon>
              </div>
              <div class="stat-info">
                <h3>Orders</h3>
                <p class="stat-number">1,234</p>
                <span class="stat-change negative">-3%</span>
              </div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>

        <mat-grid-tile>
          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-icon products">
                <mat-icon>inventory_2</mat-icon>
              </div>
              <div class="stat-info">
                <h3>Products</h3>
                <p class="stat-number">456</p>
                <span class="stat-change positive">+5%</span>
              </div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>

      <mat-grid-list [cols]="chartCols" rowHeight="400px" gutterSize="16" class="charts">
        <mat-grid-tile [colspan]="chartColspan">
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Sales Overview</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-placeholder">Chart Area</div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>

        <mat-grid-tile>
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Traffic Sources</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="chart-placeholder">Chart Area</div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [`
    .dashboard-page h1 {
      margin-bottom: 24px;
      color: #333;
    }

    .stat-card {
      width: 100%;
      height: 100%;
    }

    .stat-card mat-card-content {
      display: flex;
      align-items: center;
      gap: 16px;
      height: 100%;
      padding: 16px !important;
    }

    .stat-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #3f51b5;
    }

    .stat-icon.revenue { background-color: #4caf50; }
    .stat-icon.orders { background-color: #ff9800; }
    .stat-icon.products { background-color: #9c27b0; }

    .stat-icon mat-icon {
      color: white;
      font-size: 32px;
      width: 32px;
      height: 32px;
    }

    .stat-info h3 {
      margin: 0;
      font-size: 14px;
      color: #666;
    }

    .stat-number {
      margin: 8px 0;
      font-size: 28px;
      font-weight: bold;
      color: #333;
    }

    .stat-change {
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .stat-change.positive {
      background-color: #e8f5e9;
      color: #4caf50;
    }

    .stat-change.negative {
      background-color: #ffebee;
      color: #f44336;
    }

    .charts {
      margin-top: 16px;
    }

    .chart-card {
      width: 100%;
      height: 100%;
    }

    .chart-placeholder {
      width: 100%;
      height: 300px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      .dashboard-page h1 {
        font-size: 24px;
      }
      
      .stat-number {
        font-size: 22px;
      }
    }
  `]
})
export class DashboardComponent {
  cols = 4;
  chartCols = 2;
  chartColspan = 1;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
          this.cols = 1;
          this.chartCols = 1;
          this.chartColspan = 1;
        } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
          this.cols = 2;
          this.chartCols = 1;
          this.chartColspan = 1;
        } else {
          this.cols = 4;
          this.chartCols = 2;
          this.chartColspan = 1;
        }
      });
  }
}