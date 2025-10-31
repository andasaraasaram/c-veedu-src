import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-drawer-container class="dashboard-container" autosize>
      <mat-drawer #drawer [mode]="drawerMode" [opened]="drawerOpened" class="sidebar">
        <div class="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active" (click)="closeMobileMenu()">
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Dashboard</span>
          </a>
          <a mat-list-item routerLink="/users" routerLinkActive="active" (click)="closeMobileMenu()">
            <mat-icon matListItemIcon>people</mat-icon>
            <span matListItemTitle>Users</span>
          </a>
          <a mat-list-item routerLink="/products" routerLinkActive="active" (click)="closeMobileMenu()">
            <mat-icon matListItemIcon>inventory_2</mat-icon>
            <span matListItemTitle>Products</span>
          </a>
          <a mat-list-item routerLink="/analytics" routerLinkActive="active" (click)="closeMobileMenu()">
            <mat-icon matListItemIcon>analytics</mat-icon>
            <span matListItemTitle>Analytics</span>
          </a>
          <a mat-list-item routerLink="/settings" routerLinkActive="active" (click)="closeMobileMenu()">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>Settings</span>
          </a>
        </mat-nav-list>
      </mat-drawer>

      <mat-drawer-content>
        <mat-toolbar color="primary" class="toolbar">
          <button mat-icon-button (click)="toggleDrawer()" [attr.aria-label]="drawerOpened ? 'Close sidebar' : 'Open sidebar'">
            <mat-icon>{{ drawerOpened ? 'menu_open' : 'menu' }}</mat-icon>
          </button>
          <span class="toolbar-title">Admin Dashboard</span>
          <span class="spacer"></span>
          <button mat-icon-button>
            <mat-icon>notifications</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon>account_circle</mat-icon>
          </button>
        </mat-toolbar>

        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [`
    .dashboard-container {
      height: 100vh;
      overflow: hidden;
    }

    .sidebar {
      width: 260px;
      background-color: #f5f5f5;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .sidebar-header {
      padding: 16px;
      background-color: #3f51b5;
      color: white;
      margin-bottom: 10px;
      box-sizing: border-box;
    }

    .sidebar-header h2 {
      margin: 0;
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }

    mat-nav-list {
      padding: 0;
      width: 100%;
    }

    mat-nav-list a {
      margin: 4px 8px;
      border-radius: 4px;
      width: calc(100% - 16px);
      box-sizing: border-box;
    }

    mat-nav-list a.active {
      background-color: #e8eaf6;
      color: #3f51b5;
    }

    .toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .toolbar-title {
      font-size: 18px;
      font-weight: 500;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .main-content {
      padding: 20px;
      min-height: calc(100vh - 64px);
      background-color: #fafafa;
    }

    @media (max-width: 768px) {
      .main-content {
        padding: 12px;
      }
      
      .toolbar-title {
        font-size: 16px;
      }
    }
  `]
})
export class DashboardLayoutComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  drawerMode: 'side' | 'over' = 'side';
  drawerOpened = true;
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.drawerMode = this.isMobile ? 'over' : 'side';
        this.drawerOpened = !this.isMobile;
      });
  }

  closeMobileMenu() {
    if (this.isMobile) {
      this.drawer.close();
    }
  }

  toggleDrawer() {
    this.drawer.toggle();
  }
}