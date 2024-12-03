import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
})
export class BmiCalculatorComponent {
  weight!: number;
  height!: number;
  bmi: number | null = null;
  status: string = '';

  calculateBMI(): void {
    if (this.weight == null || this.height == null) {
      alert('Please enter both weight and height!');
      return;
    }

    const heightInMeters = this.height / 100;

    this.bmi = +(this.weight / (heightInMeters * heightInMeters)).toFixed(2);

    if (this.bmi < 18.5) {
      this.status = 'Underweight';
    } else if (this.bmi < 24.9) {
      this.status = 'Normal weight';
    } else if (this.bmi < 29.9) {
      this.status = 'Overweight';
    } else {
      this.status = 'Obesity';
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.calculateBMI();
    }
  }
}
