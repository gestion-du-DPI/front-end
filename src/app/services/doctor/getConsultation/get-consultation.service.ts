import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Consultation } from '../../../models/doc-getConsultation';
import { tap } from 'rxjs/operators';
import { ConsultationAttachments } from '../../../models/doc-consultationAttachment';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root',
})
export class GetConsultationService {
  private apiUrl = `${environment.apiUrl}/doctor`;

  constructor(private http: HttpClient) {}

  private cachedData: { [id: string]: Consultation } = {};

  getConsultationByIdCashed(id: string): Observable<Consultation> {
    if (this.cachedData[id]) {
      return of(this.cachedData[id]);
    } else {
      return this.http
        .get<Consultation>(`${this.apiUrl}/consultation/get/${id}`)
        .pipe(tap((data) => (this.cachedData[id] = data)));
    }
  }

  getConsultationAttachment(id: string): Observable<ConsultationAttachments> {
    return this.http.get<ConsultationAttachments>(
      `${this.apiUrl}/consultation/attachments/${id}`
    );
  }

  updateConsultationCache(id: string, consultation: Consultation) {
    this.cachedData[id] = consultation;
  }

  getConsultationById(id: string): Observable<Consultation> {
    return this.http.get<Consultation>(`${this.apiUrl}/consultation/get/${id}`);
  }

  fromPrescriptionToImage(prescriptionData: {
    hospital_name: string;
    doctor_name: string;
    speciality: string;
    patient_name: string;
    age: number;
    gender: string;
    date: string;
    medications: string;
    notes: string;
  }): void {
    // Create a hidden container for the prescription
    const container = document.createElement('div');
    container.style.width = '600px';
    container.style.padding = '20px';
    container.style.border = '1px solid #ccc';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.backgroundColor = 'white';
    container.style.position = 'absolute';
    container.style.top = '-9999px';
    container.style.left = '-9999px';

    // Fill the container with prescription details
    container.innerHTML = `
      <h1 style="text-align: center; margin-bottom: 20px;">${prescriptionData.hospital_name}</h1>
      <h2 style="margin-bottom: 10px;">Doctor: ${prescriptionData.doctor_name} (${prescriptionData.speciality})</h2>
      <p><strong>Patient Name:</strong> ${prescriptionData.patient_name}</p>
      <p><strong>Age:</strong> ${prescriptionData.age}</p>
      <p><strong>Gender:</strong> ${prescriptionData.gender}</p>
      <p><strong>Date:</strong> ${prescriptionData.date}</p>
      <h3 style="margin-top: 20px;">Medications:</h3>
      <p>${prescriptionData.medications}</p>
      <h3 style="margin-top: 20px;">Notes:</h3>
      <p>${prescriptionData.notes}</p>
    `;

    // Append the container to the body
    document.body.appendChild(container);

    // Generate an image using html2canvas
    html2canvas(container)
      .then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'prescription.png';
        link.click();

        // Clean up by removing the container
        document.body.removeChild(container);
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  }

  fromObservationToImage(observationData: {
    created_at: string;
    made_by: string;
    title: string;
    notes: string;
  }): void {
    // Create a hidden container for the observation
    const container = document.createElement('div');
    container.style.width = '600px';
    container.style.padding = '20px';
    container.style.border = '1px solid #ccc';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.backgroundColor = 'white';
    container.style.position = 'absolute';
    container.style.top = '-9999px';
    container.style.left = '-9999px';

    // Fill the container with observation details
    container.innerHTML = `
      <h1 style="text-align: center; margin-bottom: 20px;">Observation Details</h1>
      <p><strong>Date Created:</strong> ${observationData.created_at}</p>
      <p><strong>Made By:</strong> ${observationData.made_by}</p>
      <p><strong>Title:</strong> ${observationData.title}</p>
      <h3 style="margin-top: 20px;">Notes:</h3>
      <p>${observationData.notes}</p>
    `;

    // Append the container to the body
    document.body.appendChild(container);

    // Generate an image using html2canvas
    html2canvas(container)
      .then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'observation.png';
        link.click();

        // Clean up by removing the container
        document.body.removeChild(container);
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  }

  getAttachmentFile(id: string, fileType: string) {
    switch (fileType) {
      case 'prescription':
        this.http
          .get<any>(`${this.apiUrl}/prescription/get/${id}`, {
            responseType: 'json',
          })
          .subscribe((data) => {
            this.fromPrescriptionToImage(data);
          });
        break;
      case 'lab_image':
        this.http
          .get<any>(`${this.apiUrl}/lab/image/${id}`, {
            responseType: 'json',
          })
          .subscribe((data) => {
            const link = document.createElement('a');
            link.href = data.image;
            link.download = 'lab_image.png';
            link.click();
          });
        break;
      case 'lab_observation':
        this.http
          .get<any>(`${this.apiUrl}/lab/observation/${id}`, {
            responseType: 'json',
          })
          .subscribe((data) => {
            this.fromObservationToImage(data);
          });
        break;

      case 'Radio_image':
        this.http
          .get<any>(`${this.apiUrl}/radio/image/${id}`, {
            responseType: 'json',
          })
          .subscribe((data) => {
            const imageUrl = data.image; // Extract the image URL from the JSON response
            window.open(imageUrl, '_blank'); // Open the image URL in a new tab
          });
        break;

      case 'Radio_observation':
        this.http
          .get<any>(`${this.apiUrl}/radio/observation/${id}`, {
            responseType: 'json',
          })
          .subscribe((data) => {
            this.fromObservationToImage(data);
          });
        break;
      case 'nursing_observation':
        this.http
          .get<any>(`${this.apiUrl}/nurse/observation/${id}`, {
            responseType: 'json',
          })
          .subscribe((data) => {
            this.fromObservationToImage(data);
          });
        break;
      default:
        console.error('Invalid file type:', fileType);
    }
  }
}
