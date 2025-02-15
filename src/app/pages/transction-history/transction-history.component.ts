import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TransactionHistoryComponent } from "@app-shared/transaction-history/transaction-history.component";

export interface ITransaction {
  transactionId: string,
  date: Date | string,
  description: string,
  amount: number | string,
  status: string
}

@Component({
  selector: 'app-transction-history',
  standalone: true,
  imports: [
    TransactionHistoryComponent,
    RouterLink
  ],
  templateUrl: './transction-history.component.html',
  styleUrl: './transction-history.component.scss'
})
export class TransctionHistoryComponent {
  transactions: ITransaction[] = [
    {
      "transactionId": "TX12345",
      "date": "2025-02-10",
      "description": "Payment to John Doe",
      "amount": "-200.00",
      "status": "Completed"
    },
    {
      "transactionId": "TX12346",
      "date": "2025-02-12",
      "description": "Payment from Jane Doe",
      "amount": "500.00",
      "status": "Pending"
    },
    {
      "transactionId": "TX12347",
      "date": "2025-02-14",
      "description": "Payment to ABC Corp.",
      "amount": "-50.00",
      "status": "Completed"
    }
  ]
  
}
