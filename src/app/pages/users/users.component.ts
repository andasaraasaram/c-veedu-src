import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <div class="users-page">
      <div class="page-header">
        <h1>Users Management</h1>
        <button mat-raised-button color="primary">
          <mat-icon>add</mat-icon>
          Add User
        </button>
      </div>

      <mat-card>
        <mat-card-content>
          <div class="table-container">
            <table mat-table [dataSource]="users" class="users-table">
              <ng-container matColumnDef="id">
                <th mat-header-cell *matHeaderCellDef>ID</th>
                <td mat-cell *matCellDef="let user">{{user.id}}</td>
              </ng-container>

              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef>Name</th>
                <td mat-cell *matCellDef="let user">{{user.name}}</td>
              </ng-container>

              <ng-container matColumnDef="email">
                <th mat-header-cell *matHeaderCellDef>Email</th>
                <td mat-cell *matCellDef="let user">{{user.email}}</td>
              </ng-container>

              <ng-container matColumnDef="role">
                <th mat-header-cell *matHeaderCellDef>Role</th>
                <td mat-cell *matCellDef="let user">
                  <mat-chip>{{user.role}}</mat-chip>
                </td>
              </ng-container>

              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef>Status</th>
                <td mat-cell *matCellDef="let user">
                  <mat-chip [class.active-chip]="user.status === 'Active'" 
                            [class.inactive-chip]="user.status === 'Inactive'">
                    {{user.status}}
                  </mat-chip>
                </td>
              </ng-container>

              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let user">
                  <button mat-icon-button color="primary">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button mat-icon-button color="warn">
                    <mat-icon>delete</mat-icon>
                  </button>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .users-page h1 {
      margin: 0;
      color: #333;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .table-container {
      overflow-x: auto;
    }

    .users-table {
      width: 100%;
    }

    .active-chip {
      background-color: #e8f5e9 !important;
      color: #4caf50 !important;
    }

    .inactive-chip {
      background-color: #ffebee !important;
      color: #f44336 !important;
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
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'actions'];
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin', status: 'Active' }
  ];
}