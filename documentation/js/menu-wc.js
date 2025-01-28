'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Projet IGL Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddNewPatientPopupComponent.html" data-type="entity-link" >AddNewPatientPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminSidebarComponent.html" data-type="entity-link" >AdminSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ArchivedConsultationComponent.html" data-type="entity-link" >ArchivedConsultationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttachmentsComponent.html" data-type="entity-link" >AttachmentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttachmentsTableComponent.html" data-type="entity-link" >AttachmentsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttachmentsTableComponent-1.html" data-type="entity-link" >AttachmentsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmDeletePatientPopupComponent.html" data-type="entity-link" >ConfirmDeletePatientPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmDeleteWorkerPopupComponent.html" data-type="entity-link" >ConfirmDeleteWorkerPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmLogoutPopupComponent.html" data-type="entity-link" >ConfirmLogoutPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultationArchivedComponent.html" data-type="entity-link" >ConsultationArchivedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultationDetailsComponent.html" data-type="entity-link" >ConsultationDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultationDetailsComponent-1.html" data-type="entity-link" >ConsultationDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreatePrescriptionComponent.html" data-type="entity-link" >CreatePrescriptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent-1.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DoctorActionsComponent.html" data-type="entity-link" >DoctorActionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DoctorActionsConsultationComponent.html" data-type="entity-link" >DoctorActionsConsultationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DoctorComponent.html" data-type="entity-link" >DoctorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DoctorSidebarComponent.html" data-type="entity-link" >DoctorSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditPatientFormComponent.html" data-type="entity-link" >EditPatientFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditProfileComponent.html" data-type="entity-link" >EditProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditProfileComponent-1.html" data-type="entity-link" >EditProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditProfileComponent-2.html" data-type="entity-link" >EditProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditProfileComponent-3.html" data-type="entity-link" >EditProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditProfileComponent-4.html" data-type="entity-link" >EditProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditProfileComponent-5.html" data-type="entity-link" >EditProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditWorkerFormComponent.html" data-type="entity-link" >EditWorkerFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmailPopupComponent.html" data-type="entity-link" >EmailPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GraphPopUpComponent.html" data-type="entity-link" >GraphPopUpComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-1.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-2.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HistoryComponent.html" data-type="entity-link" >HistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LabTechnicianInfoComponent.html" data-type="entity-link" >LabTechnicianInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LabTechSidebarComponent.html" data-type="entity-link" >LabTechSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoadingPageComponent.html" data-type="entity-link" >LoadingPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Main.html" data-type="entity-link" >Main</a>
                            </li>
                            <li class="link">
                                <a href="components/Main-1.html" data-type="entity-link" >Main</a>
                            </li>
                            <li class="link">
                                <a href="components/Main-2.html" data-type="entity-link" >Main</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardComponent.html" data-type="entity-link" >MedicalCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardComponent-1.html" data-type="entity-link" >MedicalCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardComponent-2.html" data-type="entity-link" >MedicalCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardComponent-3.html" data-type="entity-link" >MedicalCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardsContainerComponent.html" data-type="entity-link" >MedicalCardsContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardsContainerComponent-1.html" data-type="entity-link" >MedicalCardsContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardsContainerComponent-2.html" data-type="entity-link" >MedicalCardsContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalCardsContainerComponent-3.html" data-type="entity-link" >MedicalCardsContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalRecordComponent.html" data-type="entity-link" >MedicalRecordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MedicalRecordComponent-1.html" data-type="entity-link" >MedicalRecordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewConsultationFormComponent.html" data-type="entity-link" >NewConsultationFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewConsultationPopupComponent.html" data-type="entity-link" >NewConsultationPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewPatientFormComponent.html" data-type="entity-link" >NewPatientFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewWorkerFormComponent.html" data-type="entity-link" >NewWorkerFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NurseComponent.html" data-type="entity-link" >NurseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NurseInfoComponent.html" data-type="entity-link" >NurseInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NurseObservationsComponent.html" data-type="entity-link" >NurseObservationsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NurseSidebarComponent.html" data-type="entity-link" >NurseSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OpenTicketComponent.html" data-type="entity-link" >OpenTicketComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientActionsComponent.html" data-type="entity-link" >PatientActionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientBadgeComponent.html" data-type="entity-link" >PatientBadgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientBadgeInfosComponent.html" data-type="entity-link" >PatientBadgeInfosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientComponent.html" data-type="entity-link" >PatientComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientDetailsComponent.html" data-type="entity-link" >PatientDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientInfosArchivedConsultationComponent.html" data-type="entity-link" >PatientInfosArchivedConsultationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientInfosComponent.html" data-type="entity-link" >PatientInfosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientInfosComponent-1.html" data-type="entity-link" >PatientInfosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientInfosConsultationArchivedComponent.html" data-type="entity-link" >PatientInfosConsultationArchivedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsComponent.html" data-type="entity-link" >PatientsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsComponent-1.html" data-type="entity-link" >PatientsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsComponent-2.html" data-type="entity-link" >PatientsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsComponent-3.html" data-type="entity-link" >PatientsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsComponent-4.html" data-type="entity-link" >PatientsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsTableComponent.html" data-type="entity-link" >PatientsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsTableComponent-1.html" data-type="entity-link" >PatientsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsTableComponent-2.html" data-type="entity-link" >PatientsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsTableComponent-3.html" data-type="entity-link" >PatientsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatientsTableComponent-4.html" data-type="entity-link" >PatientsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrescriptionComponent.html" data-type="entity-link" >PrescriptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrescriptionPopupComponent.html" data-type="entity-link" >PrescriptionPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PreviewPopupComponent.html" data-type="entity-link" >PreviewPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QrScannerComponent.html" data-type="entity-link" >QrScannerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QrScannerComponent-1.html" data-type="entity-link" >QrScannerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QrScannerComponent-2.html" data-type="entity-link" >QrScannerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadiologistInfoComponent.html" data-type="entity-link" >RadiologistInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadiologistSidebarComponent.html" data-type="entity-link" >RadiologistSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResultsObservationsComponent.html" data-type="entity-link" >ResultsObservationsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResultsObservationsComponent-1.html" data-type="entity-link" >ResultsObservationsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResultsPopupComponent.html" data-type="entity-link" >ResultsPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatisticsGraphComponent.html" data-type="entity-link" >StatisticsGraphComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketComponent.html" data-type="entity-link" >TicketComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketsHistoryComponent.html" data-type="entity-link" >TicketsHistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketsHistoryComponent-1.html" data-type="entity-link" >TicketsHistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketsHistoryComponent-2.html" data-type="entity-link" >TicketsHistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketsTableComponent.html" data-type="entity-link" >TicketsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketsTableComponent-1.html" data-type="entity-link" >TicketsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketsTableComponent-2.html" data-type="entity-link" >TicketsTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UnauthorizedComponent.html" data-type="entity-link" >UnauthorizedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserBadgeComponent.html" data-type="entity-link" >UserBadgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserInfoPopupComponent.html" data-type="entity-link" >UserInfoPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkersComponent.html" data-type="entity-link" >WorkersComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkersTableComponent.html" data-type="entity-link" >WorkersTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkspaceComponent.html" data-type="entity-link" >WorkspaceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkspaceComponent-1.html" data-type="entity-link" >WorkspaceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WorkspaceComponent-2.html" data-type="entity-link" >WorkspaceComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link" >DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EditProfileService.html" data-type="entity-link" >EditProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabTechnicianTicketService.html" data-type="entity-link" >LabTechnicianTicketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NurseTicketService.html" data-type="entity-link" >NurseTicketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientService.html" data-type="entity-link" >PatientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientService-1.html" data-type="entity-link" >PatientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RadiologistTicketService.html" data-type="entity-link" >RadiologistTicketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnauthorizedComponent.html" data-type="entity-link" >UnauthorizedComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkerService.html" data-type="entity-link" >WorkerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/FirstLoadingGuard.html" data-type="entity-link" >FirstLoadingGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsLoggedGuard.html" data-type="entity-link" >IsLoggedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AdminDashboard.html" data-type="entity-link" >AdminDashboard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminInfo.html" data-type="entity-link" >AdminInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Consultation.html" data-type="entity-link" >Consultation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Consultation-1.html" data-type="entity-link" >Consultation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditPatient.html" data-type="entity-link" >EditPatient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditWorker.html" data-type="entity-link" >EditWorker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MedicalTest.html" data-type="entity-link" >MedicalTest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Patient.html" data-type="entity-link" >Patient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Patient-1.html" data-type="entity-link" >Patient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PatientToSend.html" data-type="entity-link" >PatientToSend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Prescription.html" data-type="entity-link" >Prescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RecentPatient.html" data-type="entity-link" >RecentPatient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleCounts.html" data-type="entity-link" >RoleCounts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopStaff.html" data-type="entity-link" >TopStaff</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Worker.html" data-type="entity-link" >Worker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkerToSend.html" data-type="entity-link" >WorkerToSend</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});