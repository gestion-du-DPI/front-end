import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalTest } from '../../../models/medical-card';
import { MedicalCardComponent } from '../medical-card/medical-card.component';

@Component({
  selector: 'app-medical-cards-container',
  template: `
    <div
      class="bg-white border-[1.5px] border-slate-100 w-auto max-w-96 h-auto rounded-xl space-y-3 mx-auto py-4"
    >
      <h2 class="text-xl font-semibold text-[#373C9E] ml-3">Requested Tests</h2>

      <!-- Current Test Section -->
      <div *ngIf="selectedId">
        <h2 class="ml-8 text-lg text-[#667085] font-semibold">Current Test</h2>
        <app-medical-card
          [test]="currentTest!"
          [isSelected]="true"
          (selectCard)="currentTest && selectCard(currentTest.id)"
        ></app-medical-card>
      </div>

      <!-- Tests Queue Section -->
      <h2 class="ml-8 text-lg text-[#667085] font-semibold">Tests Queue</h2>
      <div class="flex flex-col mt-0">
        <app-medical-card
          *ngFor="let test of queueTests"
          [test]="test"
          [isSelected]="selectedId === test.id"
          (selectCard)="selectCard(test.id)"
        ></app-medical-card>
      </div>
    </div>
  `,
  styles: [],
  imports: [CommonModule, MedicalCardComponent], // Include CommonModule here
})
export class MedicalCardsContainerComponent {
  medicalTests: MedicalTest[] = [
    {
      id: '1',
      type: 'COVID-19 Test',
      priority: 'Critical',
      doctor: 'Dr.Mostefai',
      patient: {
        name: 'Lewis Hamilton',
        id: '123456',
        avatar: '/technician-icons/mrid.png',
      },
    },
    {
      id: '2',
      type: 'Iron Studies',
      priority: 'Medium',
      doctor: 'Dr.Mostefai',
      patient: {
        name: 'Lewis Hamilton',
        id: '123456',
        avatar: '/technician-icons/mrid.png',
      },
    },
    {
      id: '3',
      type: 'Lipid Profile',
      priority: 'low',
      doctor: 'Dr.Mostefai',
      patient: {
        name: 'Lewis Hamilton',
        id: '123456',
        avatar: '/technician-icons/mrid.png',
      },
    },
  ];

  selectedId: string | null = null;

  get currentTest(): MedicalTest | null {
    return (
      this.medicalTests.find((test) => test.id === this.selectedId) || null
    );
  }

  get queueTests(): MedicalTest[] {
    // Define priority levels for sorting
    const priorityOrder: { [key: string]: number } = {
      Critical: 1,
      Medium: 2,
      low: 3,
    };

    // Filter out the selected test, then sort by priority
    return this.medicalTests
      .filter((test) => test.id !== this.selectedId)
      .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }

  selectCard(id: string) {
    // Toggle selection of the test
    this.selectedId = this.selectedId === id ? null : id;
  }
}
