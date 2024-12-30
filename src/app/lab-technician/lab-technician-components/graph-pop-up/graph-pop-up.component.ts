import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph-pop-up',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white flex-col flex justify-between p-4 rounded-xl mx-5 lg:w-full h-full">
      <div class="flex flex-row items-center justify-start gap-5 pb-5">
        <h1 class="text-main font-semibold text-2xl">Create Graph</h1>
        <img src="graphtype1.svg" alt="type1" class="w-10" />
      </div>
      <div class="flex flex-row items-center justify-start">
        <div class="flex flex-col">
          <label class="text-xl font-medium">Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="eg. Full blood test"
            class="border border-gray-300 rounded-lg p-2 text-sm mr-10"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-xl font-medium">x Axis title</label>
          <input
            type="text"
            name="xaxis"
            required
            placeholder="samples"
            class="border border-gray-300 rounded-lg p-2 text-sm mr-10"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-xl font-medium">Y axis title</label>
          <input
            type="text"
            name="yaxis"
            required
            placeholder="mg"
            class="border border-gray-300 rounded-lg p-2 text-sm mr-10"
          />
        </div>
      </div>

      <table class="border-collapse justify-self-center table-auto w-full">
        <thead>
          <tr>
            <th class="hidden lg:table-cell text-left px-4 py-2">Color</th>
            <th class="hidden lg:table-cell text-left px-4 py-2">Test Title</th>
            <th *ngFor="let header of headers" class="text-left px-4 py-2">
              {{ header }}
            </th>
            <th class="text-left px-4 py-2 flex items-center gap-2">
              <!-- Input for adding a new column (appears inline) -->
              <input
                *ngIf="isAddingHeader"
                type="text"
                class="border border-gray-300 rounded-lg p-2 w-28"
                placeholder="Enter column name"
                (keyup.enter)="finishAddingHeader($event)"
                (blur)="cancelAddingHeader()"
              />

              <!-- Plus button -->
              <button
                (click)="startAddingHeader()"
                class="p-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                <img src="plus.svg" alt="+" />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Rows -->
          <tr *ngFor="let row of rows; let rowIndex = index">
            <td class="hidden lg:table-cell px-4 py-2 relative">
              <div
                class="bg-main w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded cursor-pointer"
                [style.background-color]="rowColors[rowIndex]"
                (click)="toggleColorPicker(rowIndex)"
              ></div>
              <input
                *ngIf="activeColorPickerIndex === rowIndex"
                type="color"
                class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                (change)="updateRowColor(rowIndex, $event)"
                (blur)="closeColorPicker()"
              />
            </td>
            <td class="hidden lg:table-cell px-4 py-2">
              <input
                type="text"
                name="testTitle"
                required
                placeholder="eg. Normal Person"
                class="border border-gray-300 rounded-lg p-2 text-sm w-full"
              />
            </td>
            <td *ngFor="let cell of row" class="px-4 py-2">
              <input
                type="number"
                [value]="cell"
                class="border border-gray-300 rounded-lg p-2 w-16"
              />
            </td>
          </tr>

          <!-- Row for adding a new row -->
          <tr>
            <td class="hidden lg:table-cell text-center px-4 py-2">
              <!-- Plus button directly under the Color square -->
              <button
                (click)="addRow()"
                class="p-2 rounded bg-gray-200 hover:bg-gray-300 flex items-center gap-2"
              >
                <img src="plus.svg" alt="+" />
              </button>
            </td>
            <td colspan="100%"></td>
          </tr>
        </tbody>
      </table>

      <!-- Buttons for Preview and Create, placed just outside the table -->
      <div class="flex justify-end gap-4 mt-4">
        <button
          class="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          (click)="previewGraph()"
        >
          Preview
        </button>
        <button
          class="px-6 py-2 bg-main text-white rounded-lg hover:bg-main-dark"
          (click)="createGraph()"
        >
          Create
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class GraphPopUpComponent {
  @Output() closePopup = new EventEmitter<void>();

  headers: string[] = []; // Column headers
  rows: number[][] = [[]]; // Initial data
  isAddingHeader = false;
  rowColors: string[] = ['#000000']; // Default row colors
  activeColorPickerIndex: number | null = null; // Track active color picker


  // Trigger adding a new header
  startAddingHeader(): void {
    this.isAddingHeader = true;
  }

  // Finish adding a header (on Enter)
  finishAddingHeader(event: any): void {
    const newHeader = event.target.value.trim();
    if (newHeader) {
      this.headers.push(newHeader);
      this.rows.forEach((row) => row.push(0)); // Add a new column for each row
    }
    this.isAddingHeader = false;
  }

  // Cancel adding header (on blur)
  cancelAddingHeader(): void {
    this.isAddingHeader = false;
  }

  // Add a new row with the same structure as the existing rows
  addRow(): void {
    const newRow = this.headers.map(() => 0); // Initialize a row with 0 values
    this.rows.push(newRow);
  }
  // Toggle the color picker for a specific row
  toggleColorPicker(index: number): void {
    this.activeColorPickerIndex = index;
  }

  // Update the color for a specific row
  updateRowColor(index: number, event: any): void {
    this.rowColors[index] = event.target.value; // Set the selected color
    this.activeColorPickerIndex = null; // Close the color picker
  }

  // Close the color picker on blur
  closeColorPicker(): void {
    this.activeColorPickerIndex = null;
  }

    // Placeholder function for Preview button
    previewGraph(): void {
      console.log('Preview the graph');
    }
  
    // Placeholder function for Create button
    createGraph(): void {
      console.log('Create the graph');
    }
}
