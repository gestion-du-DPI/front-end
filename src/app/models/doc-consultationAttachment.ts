export interface ConsultationAttachment {
  type: string;
  title: string;
  made_by: string;
  profile_image: string;
  created_at: string;
  attachment_id: number;
}

export interface ConsultationAttachments {
  results: ConsultationAttachment[];
}
