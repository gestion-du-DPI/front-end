export interface EditWorker {
  address: string;
  created_at: string;
  email: string;
  first_name: string;
  last_name: string;
  name: string;
  nss: string;
  phone_number: string;
  profile_image: string;
  role: string;
  speciality: string;
  user_id: number;
}

export interface WorkerToSend {
  first_name: string;
  last_name: string;
  nss: string;
  address: string;
  phone_number: string;
  email: string;
}
