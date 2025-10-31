import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDividerModule
  ],
  template: `
    <div class="settings-page">
      <h1>Settings</h1>

      <mat-card class="settings-section">
        <mat-card-header>
          <mat-card-title>Profile Settings</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="form-grid">
            <mat-form-field appearance="outline">
              <mat-label>Full Name</mat-label>
              <input matInput value="John Doe">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput type="email" value="john@example.com">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Phone</mat-label>
              <input matInput value="+1 234 567 8900">
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Department</mat-label>
              <mat-select value="engineering">
                <mat-option value="engineering">Engineering</mat-option>
                <mat-option value="marketing">Marketing</mat-option>
                <mat-option value="sales">Sales</mat-option>
                <mat-option value="hr">Human Resources</mat-option>
              </mat-select>
            </mat-form-field>
          </div>
          <button mat-raised-button color="primary">Save Changes</button>
        </mat-card-content>
      </mat-card>

      <mat-card class="settings-section">
        <mat-card-header>
          <mat-card-title>Notification Preferences</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="toggle-list">
            <div class="toggle-item">
              <div>
                <div class="toggle-label">Email Notifications</div>
                <div class="toggle-description">Receive email updates about your account</div>
              </div>
              <mat-slide-toggle [checked]="true"></mat-slide-toggle>
            </div>
            <mat-divider></mat-divider>

            <div class="toggle-item">
              <div>
                <div class="toggle-label">Push Notifications</div>
                <div class="toggle-description">Receive push notifications on your device</div>
              </div>
              <mat-slide-toggle [checked]="false"></mat-slide-toggle>
            </div>
            <mat-divider></mat-divider>

            <div class="toggle-item">
              <div>
                <div class="toggle-label">Weekly Reports</div>
                <div class="toggle-description">Get weekly analytics reports</div>
              </div>
              <mat-slide-toggle [checked]="true"></mat-slide-toggle>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="settings-section">
        <mat-card-header>
          <mat-card-title>Security</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <button mat-stroked-button color="primary" class="security-button">
            Change Password
          </button>
          <button mat-stroked-button color="primary" class="security-button">
            Two-Factor Authentication
          </button>
          <button mat-stroked-button color="warn" class="security-button">
            Delete Account
          </button>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .settings-page h1 {
      margin-bottom: 24px;
      color: #333;
    }

    .settings-section {
      margin-bottom: 24px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }

    .toggle-list {
      display: flex;
      flex-direction: column;
    }

    .toggle-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
    }

    .toggle-label {
      font-weight: 500;
      color: #333;
      margin-bottom: 4px;
    }

    .toggle-description {
      font-size: 14px;
      color: #666;
    }

    .security-button {
      margin-right: 12px;
      margin-bottom: 12px;
    }

    @media (max-width: 768px) {
      .settings-page h1 {
        font-size: 24px;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .toggle-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .security-button {
        width: 100%;
        margin-right: 0;
      }
    }
  `]
})
export class SettingsComponent {}