import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-workers-table',
  imports: [CommonModule],
  template: `
    <table class="border-collapse justify-self-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Social Number</th>
          <th>Address</th>
          <th>Date of Hire</th>
          <th>Consultations</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let worker of workers">
          <td class="flex flex-row gap-4 items-center">
            <img src="admin.jpg" class=" w-10 h-10 rounded-full" alt="" />
            <div class="flex flex-col">
              <span class=" font-bold text-sm">{{ worker.name }}</span>
              <span class=" text-sm font-normal text-[#667085]">{{ worker.tag }}</span>
            </div>
          </td>
          <td>{{ worker.role }}</td>
          <td>{{ worker.email }}</td>
          <td>{{ worker.phone }}</td>
          <td>{{ worker.socialNumber }}</td>
          <td>{{ worker.address }}</td>
          <td>{{ worker.dateOfHire }}</td>
          <td>{{ worker.consultations }}</td>
          <td><img src="edit-icon.svg" alt="edit"></td>
          <td><img src="delete-icon.svg" alt="edit"></td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      table {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      td {
        padding: 10px 15px;
        text-align: left;
        font-size:14px;
        font-weight: 600;
      }
      th {
        padding: 10px 0px;
        font-weight: 500;
        font-size:12px;
        color: #667085;
      }
    `,
  ],
})
export class WorkersTableComponent {
  workers = [
    {
      name: 'Alice Johnson',
      role: 'Manager',
      email: 'alice@example.com',
      phone: '123-456-7890',
      socialNumber: '123-45-6789',
      address: '123 Main St, City',
      dateOfHire: '2020-01-15',
      consultations: 10,
      tag: '@manager',
    },
    {
      name: 'Bob Smith',
      role: 'Developer',
      email: 'bob@example.com',
      phone: '234-567-8901',
      socialNumber: '234-56-7890',
      address: '456 Elm St, City',
      dateOfHire: '2021-03-22',
      consultations: 5,
      tag: '@developer',
    },
    {
      name: 'Charlie Brown',
      role: 'Designer',
      email: 'charlie@example.com',
      phone: '345-678-9012',
      socialNumber: '345-67-8901',
      address: '789 Oak St, City',
      dateOfHire: '2019-07-10',
      consultations: 8,
      tag: '@designer',
    },
    {
      name: 'Diana Prince',
      role: 'HR',
      email: 'diana@example.com',
      phone: '456-789-0123',
      socialNumber: '456-78-9012',
      address: '321 Pine St, City',
      dateOfHire: '2018-11-05',
      consultations: 12,
      tag: '@hr',
    },
    {
      name: 'Evan Wright',
      role: 'Support',
      email: 'evan@example.com',
      phone: '567-890-1234',
      socialNumber: '567-89-0123',
      address: '654 Cedar St, City',
      dateOfHire: '2022-02-20',
      consultations: 7,
      tag: '@support',
    },
    {
      name: 'Fiona Black',
      role: 'Manager',
      email: 'fiona@example.com',
      phone: '678-901-2345',
      socialNumber: '678-90-1234',
      address: '987 Birch St, City',
      dateOfHire: '2017-06-30',
      consultations: 9,
      tag: '@manager',
    },
    {
      name: 'George Green',
      role: 'Technician',
      email: 'george@example.com',
      phone: '789-012-3456',
      socialNumber: '789-01-2345',
      address: '123 Willow St, City',
      dateOfHire: '2016-09-12',
      consultations: 11,
      tag: '@technician',
    },
    {
      name: 'Helen Gray',
      role: 'Accountant',
      email: 'helen@example.com',
      phone: '890-123-4567',
      socialNumber: '890-12-3456',
      address: '456 Maple St, City',
      dateOfHire: '2023-01-03',
      consultations: 3,
      tag: '@accountant',
    },
    {
      name: 'Ian White',
      role: 'Trainer',
      email: 'ian@example.com',
      phone: '901-234-5678',
      socialNumber: '901-23-4567',
      address: '789 Fir St, City',
      dateOfHire: '2021-05-18',
      consultations: 6,
      tag: '@trainer',
    },
    {
      name: 'Julia Blue',
      role: 'Consultant',
      email: 'julia@example.com',
      phone: '012-345-6789',
      socialNumber: '012-34-5678',
      address: '321 Ash St, City',
      dateOfHire: '2019-10-25',
      consultations: 15,
      tag: '@consultant',
    },
  ];
}
