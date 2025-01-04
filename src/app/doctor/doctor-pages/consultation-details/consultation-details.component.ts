import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { consultations } from '../../../mock-data/consultations';
import { HeaderComponent } from '../../doctor-components/header/header.component';
import { UserBadgeComponent } from '../../../admin/admin-components/user-badge/user-badge.component';

@Component({
  selector: 'app-consultation-details',
  imports: [RouterOutlet, UserBadgeComponent],
  template: `
    <div class="flex flex-col">
      <div class="flex flex-col gap-4 lg:mx-12 mx-3">
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12"
        >
          <div class="p-4">
            <h1 class="text-4xl text-main font-semibold">
              Consultation details
            </h1>
          </div>
          <app-user-badge></app-user-badge>
        </div>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class ConsultationDetailsComponent implements OnInit {
  consultation: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const constId = this.route.snapshot.paramMap.get('id');
    if (constId) {
      this.consultation = consultations.find((c) => c.id === +constId);
    }
  }
}
