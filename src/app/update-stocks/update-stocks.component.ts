import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-stocks',
  templateUrl: './update-stocks.component.html',
  styleUrls: ['./update-stocks.component.scss']
})
export class UpdateStocksComponent implements OnInit {
  updateStockForm: FormGroup;
  private apiUrl = 'http://localhost:5000/api/medicine/add';
stockData:any={}
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.updateStockForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      stock: ['', [Validators.required, Validators.min(0)]],
      expiryDate: ['', [Validators.required]], // Date input
      manufacturer: ['', [Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.updateStockForm.valid) {
      this.stockData = this.updateStockForm.value;
      this.stockData.expiryDate = this.invertDateFormat(this.stockData.expiryDate);

      console.log("Formatted Data:", this.stockData);

      this.http.post(this.apiUrl, this.stockData).subscribe(
        response => {
          console.log('Stock updated successfully:', response);
          alert('Stock updated successfully!');
        },
        error => {
          console.error('Error updating stock:', error);
          alert('Failed to update stock.');
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  invertDateFormat(date: string): string {
    return date ? date.replace(/-/g, '/') : '';
  }
}
