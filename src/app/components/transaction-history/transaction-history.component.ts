import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITransaction } from '@app-pages/transction-history/transction-history.component';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="transaction-history">
  <h2>Transaction History</h2>

  <table aria-describedby="transaction-history-description">
    <caption id="transaction-history-description">List of recent transactions</caption>
    <thead>
      <tr>
        <th scope="col">Transaction ID</th>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
    @for (transaction of transactions; track transaction.transactionId; let idx = $index) {
      <tr>
        <td>{{ transaction.transactionId }}</td>
        <td>{{ transaction.date }}</td>
        <td>{{ transaction.description }}</td>
        <td [ngClass]="{ 'positive': this.parseFloat(transaction?.amount?.toString() ?? '0') > 0, 'negative': this.parseFloat(transaction?.amount?.toString() ?? '0') < 0 }">
          {{ this.formatAmount(transaction?.amount?.toString() ?? '0') }}
        </td>
        <td>{{ transaction.status }}</td>
      </tr>
    }
    </tbody>
  </table>

  <div *ngIf="transactions.length === 0" class="no-transactions">
    <p>No transactions available.</p>
  </div>
</div>

  `,
  styles: `
  .transaction-history {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;

    h2 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      caption-side: top;

      caption {
        font-weight: bold;
        margin-bottom: 10px;
      }

      th, td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ddd;
      }

      th {
        background-color: #f1f1f1;
      }

      .positive {
        color: green;
      }

      .negative {
        color: red;
      }

      tr:hover {
        background-color: #f1f1f1;
      }
    }

    .no-transactions {
      text-align: center;
      font-size: 1.2rem;
      color: #888;
    }
  }

  
  `
})
export class TransactionHistoryComponent {
  @Input() transactions: ITransaction[] = []

  formatAmount(amount: string): string {
    const formattedAmount = parseFloat(amount).toFixed(2);
    return `#${formattedAmount}`;
  }
  
  parseFloat(amount: string): number {
    const parsedAmount = parseFloat(amount);
    return isNaN(parsedAmount) ? 0 : parsedAmount;
  }
}
