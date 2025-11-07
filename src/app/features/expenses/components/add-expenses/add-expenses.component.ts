import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-expenses',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    InputNumberModule,
    DatePickerModule,
  ],
  templateUrl: './add-expenses.component.html',
  styleUrl: './add-expenses.component.css',
})
export class AddExpensesComponent {
  private _http = inject(HttpClient);

  ngOnInit() {}
  currancy = 'USD';
  originalAmount = 0;
  convertedAmount = 0;

  addExpenseForm = new FormGroup({
    category: new FormControl('', Validators.required),
    amount: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    date: new FormControl(null, Validators.required),
    receipt: new FormControl(null),
    currency: new FormControl('', Validators.required),
  });

  categories = [
    { label: 'Food', value: 'food', icon: 'pi pi-apple' },
    { label: 'Transport', value: 'transport', icon: 'pi pi-car' },
    { label: 'Shopping', value: 'shopping', icon: 'pi pi-shopping-bag' },
    { label: 'Bills', value: 'bills', icon: 'pi pi-wallet' },
  ];

  currencies = [
    { label: 'USD ($)', value: 'USD' },
    { label: 'EGP (جنيه)', value: 'EGP' },
    { label: 'EUR (€)', value: 'EUR' },
  ];

  onFileSelect(event: any) {
    const file = event.files[0];
    if (file) {
      this.addExpenseForm.patchValue({ receipt: file });
    }
  }
  selectCurrancy(e: any) {
    this.currancy = e?.value?.value;
  }
  onBasicUploadAuto(event: any) {
    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  onSave() {
    if (this.addExpenseForm.invalid) {
      this.addExpenseForm.markAllAsTouched();
      return;
    }

    console.log('Expense Data:', this.addExpenseForm.value);
    alert('Expense saved successfully!');
  }

  selectedCategory = '';

  categoriesIcons = [
    { label: 'Entertainment', value: 'entertainment', icon: 'pi pi-video' },
    { label: 'Gas', value: 'gas', icon: 'pi pi-fire' },
    { label: 'Shopping', value: 'shopping', icon: 'pi pi-shopping-bag' },
    { label: 'Transport', value: 'transport', icon: 'pi pi-car' },
    { label: 'Rent', value: 'rent', icon: 'pi pi-home' },
  ];

  selectCategory(cat: any) {
    this.selectedCategory = cat.value;
    this.addExpenseForm.patchValue({ category: cat.value });
  }

  addNew() {
    console.log(this.addExpenseForm.value);

    this._http.get('https://open.er-api.com/v6/latest/USD').subscribe({
      next: (res: any) => {
        const rate = res?.rates[`${this.currancy}`];
        this.originalAmount = this.addExpenseForm.value['amount'] || 0;
        this.convertedAmount = this.originalAmount / rate;
        localStorage.setItem('originalAmount', JSON.stringify(this.originalAmount));
        localStorage.setItem('convertedAmount', JSON.stringify(this.convertedAmount));
      },
    });
  }
}
