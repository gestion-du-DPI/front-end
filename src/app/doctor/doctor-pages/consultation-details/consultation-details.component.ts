import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { consultations } from '../../../mock-data/consultations';

@Component({
  selector: 'app-consultation-details',
  imports: [RouterOutlet],
  template: `
 <div class="flex flex-row">
      <h4 class="text-main text-3xl font-semibold m-5">Consultation Details</h4>
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
