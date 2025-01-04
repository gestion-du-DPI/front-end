// card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [ngClass]="color"
      class="min-w-[214px] w-auto min-h-[110px] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2"
    >
      <div class="flex justify-between items-center">
        <p class="font-semibold text-sm opacity-60 font-plus-jakarta">
          {{ title }}
        </p>
        <img [src]="icon" alt="Card Icon" />
      </div>
      <div class="flex justify-between items-center">
        <p class="text-3xl font-bold font-plus-jakarta">{{ count }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .bg-main {
        background-color: #999bfd;
      }
      .bg-secondary {
        background-color: #a7daf8;
      }
      .bg-tertiary {
        background-color: #8fdbf2;
      }
      .bg-quaternary {
        background-color: #92e2ee;
      }
      .bg-fifth {
        background-color: #94e9e9;
      }
    `,
  ],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() color: string = 'bg-main';
  @Input() icon: string = '';
}
