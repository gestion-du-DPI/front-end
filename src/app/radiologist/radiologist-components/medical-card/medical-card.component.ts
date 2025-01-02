import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MedicalTest } from '../../../models/medical-card';

@Component({
  selector: 'app-medical-card',
  template: `
    <div class="card transition-all duration-200">
      <div class="card-content p-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="flex justify-center items-center w-16 h-16 p-3 rounded-lg bg-blue-100"
              [class.bg-orange-100]="test.priority === 'Medium'"
              [class.bg-red-100]="test.priority === 'Critical'"
            >
              <img
                src="technician-icons/blue-lab.png"
                alt="icon"
                [class.hidden]="test.priority != 'low'"
              />
              <img
                src="technician-icons/red-lab.png"
                alt="icon"
                [class.hidden]="test.priority != 'Critical'"
              />
              <img
                src="technician-icons/orange-lab.png"
                alt="icon"
                [class.hidden]="test.priority != 'Medium'"
              />
            </div>
            <div>
              <h3 class="font-medium text-sm">{{ test.type }}</h3>
              <div
                class="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <img
                  src="technician-icons/user-icon.png"
                  class="w-3 h-3"
                  alt="icon"
                />
                {{ test.doctor }}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button
              (click)="toggleExpand()"
              class="p-2 hover:bg-muted rounded-full"
            >
              <img
                src="technician-icons/chevron-down-icon.png"
                alt="icon"
                [class.hidden]="isExpanded"
              />
              <img
                src="technician-icons/chevron-up-icon.png"
                alt="icon"
                [class.hidden]="!isExpanded"
              />
            </button>
            <button
              (click)="onCardClick()"
              class="p-2 hover:bg-muted rounded-full"
              [class.text-primary]="isSelected"
            >
              <img
                src="technician-icons/plus-icon.png"
                alt="icon"
                [class.hidden]="isSelected"
                class="w-4 h-4"
              />
              <img
                src="technician-icons/pinned-icon.png"
                alt="icon"
                [class.hidden]="!isSelected"
                class="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div [hidden]="!isExpanded" class=" mt-4 space-y-4">
          <div class="flex items-center justify-around gap-2">
            <div class="flex flex-col gap-1">
              <span
                class="text-[10px] ml-1 text-[#ADADAD] font-semibold text-muted-foreground"
                >Priority</span
              >
              <div
                class="inline-block px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700"
                [class.bg-red-100]="test.priority === 'Critical'"
                [class.text-red-700]="test.priority === 'Critical'"
                [class.bg-orange-100]="test.priority === 'Medium'"
                [class.text-orange-700]="test.priority === 'Medium'"
              >
                {{ test.priority }}
              </div>
            </div>
            <img
              [src]="test.patient.avatar"
              alt="Patient Avatar"
              class="w-8 h-8 rounded-full ml-auto"
            />
            <div
              class="flex items-start flex-col gap-1 text-xs text-muted-foreground"
            >
              <span class="font-medium text-sm">{{ test.patient.name }}</span>
              <div>
                <span>ID:</span>
                <span>{{ test.patient.id }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class MedicalCardComponent {
  @Input() test!: MedicalTest;
  @Input() isSelected = false;
  @Output() selectCard = new EventEmitter<void>();

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  onCardClick() {
    this.selectCard.emit();
  }
}
