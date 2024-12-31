import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-graph-pop-up',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule, FormsModule],
  template: `
    <div class="bg-white flex-col flex justify-between p-4 rounded-xl mx-5 lg:w-full h-full overflow-y-auto" style="max-height: 600px;">
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
            [(ngModel)]="graphTitle"
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
            [(ngModel)]="xAxisTitle"
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
            [(ngModel)]="yAxisTitle"
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
              <input
                *ngIf="isAddingHeader"
                type="text"
                class="border border-gray-300 rounded-lg p-2 w-28"
                placeholder="Enter column name"
                (keyup.enter)="finishAddingHeader($event)"
                (blur)="cancelAddingHeader()"
              />
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
          <tr *ngFor="let row of rows; let rowIndex = index">
            <td class="hidden lg:table-cell px-4 py-2 relative">
              <div
                class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded cursor-pointer"
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
                [(ngModel)]="rowTestTitles[rowIndex]"
                required
                placeholder="eg. Normal Person"
                class="border border-gray-300 rounded-lg p-2 text-sm w-full"
              />
            </td>
            <!-- Numeric input with two-way binding -->
            <td *ngFor="let cell of row; let colIndex = index" class="px-4 py-2">
              <input
                type="number"
                [(ngModel)]="rows[rowIndex][colIndex]"
                class="border border-gray-300 rounded-lg p-2 w-16"
              />
            </td>
          </tr>

          <tr>
            <td class="hidden lg:table-cell text-center px-4 py-2">
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

      <div class="flex justify-end gap-4 mt-4">
        <button
          class="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          (click)="previewGraph()"
        >
          Preview
        </button>
        <button
          class="px-6 py-2 bg-main text-white rounded-lg hover:bg-main-dark"
          (click)="generateGraphImageAndSend()"
        >
          Create
        </button>
      </div>

      <div *ngIf="showGraph" id="graph-container">
        <canvasjs-chart [options]="chartOptions"></canvasjs-chart>
      </div>
    </div>
  `,
  styles: [],
})
export class GraphPopUpComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() createGraph = new EventEmitter<string>();

  graphImage: string | null = null;

  generateGraphImageAndSend() {
    const graphElement = document.getElementById('graph-container');
    if (graphElement) {
      html2canvas(graphElement).then((canvas) => {
        const imageData = canvas.toDataURL('image/png'); // Converts to image
        this.createGraph.emit(imageData); // Emits the image
        this.closePopup.emit(); // Close the popup

      });
    }
  }



  headers: string[] = []; // Column headers
  rows: number[][] = [[]]; // Initial data
  rowColors: string[] = ['#373C9E']; // Default row colors
  rowTestTitles: string[] = ['']; // Titles for each row
  activeColorPickerIndex: number | null = null;
  isAddingHeader = false;
  showGraph = false; // Flag to control graph visibility
  graphTitle: string = ''; // Title of the graph
  xAxisTitle: string = ''; // X-axis title
  yAxisTitle: string = ''; // Y-axis title
  chartOptions: any = {}; // To hold the graph options

  startAddingHeader(): void {
    this.isAddingHeader = true;
  }

  finishAddingHeader(event: any): void {
    const newHeader = event.target.value.trim();
    if (newHeader) {
      this.headers.push(newHeader);
      this.rows.forEach((row) => row.push(0));
    }
    this.isAddingHeader = false;
  }

  cancelAddingHeader(): void {
    this.isAddingHeader = false;
  }

  addRow(): void {
    const newRow = this.headers.map(() => 0); // Initialize a row with 0 values
    this.rows.push(newRow);
    this.rowTestTitles.push(''); // Add an empty test title for the new row
  }

  toggleColorPicker(index: number): void {
    this.activeColorPickerIndex = index;
  }

  updateRowColor(index: number, event: any): void {
    this.rowColors[index] = event.target.value;
    this.activeColorPickerIndex = null;
  }

  closeColorPicker(): void {
    this.activeColorPickerIndex = null;
  }

  previewGraph(): void {
    console.log('Updated Rows:', this.rows);
  
    this.showGraph = true;
  
    this.chartOptions = {
      title: {
        text: this.graphTitle || 'Graph from Table Data',
      },
      axisX: {
        title: this.xAxisTitle,
        categories: this.headers,
      },
      axisY: {
        title: this.yAxisTitle,
        includeZero: true,
      },
      data: this.rows.map((row, rowIndex) => ({
        type: 'column',
        name: this.rowTestTitles[rowIndex] || `Test ${rowIndex + 1}`, // Use the test title from input
        color: this.rowColors[rowIndex],
        showInLegend: true,
        dataPoints: this.headers.map((header, headerIndex) => ({
          label: header,
          y: row[headerIndex],
        })),
      })),
    };

    console.log('Chart Options:', this.chartOptions);
  }

  
}
