import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router'; // Added Router
import { consultations } from '../../../mock-data/consultations';
import { UserBadgeComponent } from '../../doctor-components/user-badge/user-badge.component';

@Component({
  selector: 'app-consultation-details',
  imports: [UserBadgeComponent, RouterOutlet],
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

  constructor(private route: ActivatedRoute, private router: Router) {} // Inject Router

  ngOnInit(): void {
    const constId = this.route.snapshot.paramMap.get('id');
    if (constId) {
      this.consultation = consultations.find((c) => c.id === +constId);
      if (this.consultation?.archived) {
        // Redirect to consultation-archived/:id if archived
        this.router.navigate([`/consultation-archived/${constId}`]);
      }
    }
  }
}
