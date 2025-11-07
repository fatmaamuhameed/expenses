import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataView } from 'primeng/dataview';
import { ProductService } from '../../services/expenses.service';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
@Component({
  selector: 'app-recent-expenses',
  standalone: true,
  imports: [DataView, ButtonModule, DatePipe, PaginatorModule],
  templateUrl: './recent-expenses.component.html',
  styleUrl: './recent-expenses.component.css',
})
export class RecentExpensesComponent {
  products = signal<any>([]);

  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      const d = data.slice(0, 9);
      this.products.set([...data]);
    });
  }

  first: number = 0;

  rows: number = 10;

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }

  exportToPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Expense Report', 14, 15);

    const productData = this.products();
    autoTable(doc, {
      startY: 35,
      head: [['Category', 'Description', 'Amount ($)', 'Date']],
      body: productData.map((exp: any) => [
        exp.category,
        exp.description || '-',
        exp.price ? `$${exp.price.toFixed(2)}` : '$0.00',
        exp.date ? new Date(exp.date).toLocaleDateString() : '-',
      ]),
      styles: {
        halign: 'center',
        valign: 'middle',
        fontSize: 11,
      },
      headStyles: {
        fillColor: [25, 118, 210],
        textColor: [255, 255, 255],
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
    });

    doc.save('expense-report.pdf');
  }
}
