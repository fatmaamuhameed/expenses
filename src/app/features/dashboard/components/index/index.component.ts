import { Component, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { RecentExpensesComponent } from '../recent-expenses/recent-expenses.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

interface Duration {
  name: string;
  id: string;
}

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [AvatarModule, Select, FormsModule, RecentExpensesComponent, ButtonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  filterby: Duration[] | undefined;
  private _router = inject(Router);
  selectedCity: Duration | undefined;

  ngOnInit() {
    this.filterby = [
      { name: 'This Month,', id: '1' },
      { name: 'Last 7 Days', id: '2' },
    ];
  }

  addExpenses() {
    this._router.navigate(['/add-expenses']);
  }
}
