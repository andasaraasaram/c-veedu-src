import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule],
  template: `
    <div class="analytics-page">
      <h1>Analytics</h1>

      <mat-tab-group>
        <mat-tab label="Overview">
          <div class="tab-content">
            <div class="analytics-grid">
              <mat-card>
                <mat-card-header>
                  <mat-icon mat-card-avatar>trending_up</mat-icon>
                  <mat-card-title>Page Views</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <div class="metric-value">125,432</div>
                  <div class="metric-change positive">+15.3%</div>
                </mat-card-content>
              </mat-card>

              <mat-card>
                <mat-card-header>
                  <mat-icon mat-card-avatar>people</mat-icon>
                  <mat-card-title>Unique Visitors</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <div class="metric-value">45,678</div>
                  <div class="metric-change positive">+8.7%</div>
                </mat-card-content>
              </mat-card>

              <mat-card>
                <mat-card-header>
                  <mat-icon mat-card-avatar>access_time</mat-icon>
                  <mat-card-title>Avg. Session</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <div class="metric-value">4m 32s</div>
                  <div class="metric-change negative">-2.1%</div>
                </mat-card-content>
              </mat-card>

              <mat-card>
                <mat-card-header>
                  <mat-icon mat-card-avatar>bounce</mat-icon>
                  <mat-card-title>Bounce Rate</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <div class="metric-value">42.5%</div>
                  <div class="metric-change positive">-3.2%</div>
                </mat-card-content>
              </mat-card>
            </div>
          </div>
        </mat-tab>

        <mat-tab label="Traffic">
          <div class="tab-content">
            <mat-card>
              <mat-card-header>
                <mat-card-title>Traffic Sources</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="chart-placeholder-large">Traffic Chart</div>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-tab>

        <mat-tab label="Engagement">
          <div class="tab-content">
            <mat-card>
              <mat-card-header>
                <mat-card-title>User Engagement</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="chart-placeholder-large">Engagement Chart</div>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .analytics-page h1 {
      margin-bottom: 24px;
      color: #333;
    }

    .tab-content {
      padding: 24px 0;
    }

    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    mat-card-header mat-icon {
      background-color: #3f51b5;
      color: white;
      padding: 8px;
      border-radius: 50%;
    }

    .metric-value {
      font-size: 32px;
      font-weight: bold;
      color: #333;
      margin: 16px 0 8px 0;
    }

    .metric-change {
      font-size: 14px;
      padding: 4px 8px;
      border-radius: 4px;
      display: inline-block;
    }

    .metric-change.positive {
      background-color: #e8f5e9;
      color: #4caf50;
    }

    .metric-change.negative {
      background-color: #ffebee;
      color: #f44336;
    }

    .chart-placeholder-large {
      width: 100%;
      height: 400px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      border-radius: 4px;
      margin-top: 16px;
    }

    @media (max-width: 768px) {
      .analytics-page h1 {
        font-size: 24px;
      }

      .analytics-grid {
        grid-template-columns: 1fr;
      }

      .metric-value {
        font-size: 24px;
      }
    }
  `]
})
export class AnalyticsComponent {}