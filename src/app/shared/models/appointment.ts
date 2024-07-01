export interface Appointment {
    id: number;
    time: Date;
    payment_status: string;
    patient_id: string;
    first_name: string;
    last_name:string;
    sex: string;
    allergies_or_chronic_issues:string;
    doctorfirst:string;
    doctorlast:string;
    roomnum:string;
}

export interface AppointmentSingle {
    appointment_number?:number;
    time?:Date;
    payment_status?:string;
    confirmation_status?:string;
    first_name?:string;
    last_name?:string;
    sex?:string;
    email?:string;
    payments_or_insurance?:string;
    allergies_or_chronic_issues?:string;
    current_treatments?:string;
    adminfirst?:string;
    adminlast?:string;
    adminpos?:string;
    adminDepartment?:string;
    doctorfirst?:string;
    doctorlast?:string;
    position?:string;
    department?:string;
    specialty?:string;
    roomnum?:number;
    ward?:string;
    floor?:string;
    availability_status?:string;
}

export interface Patient {
    id?:number;
    first_name?:string;
    last_name?:string;
    sex?:string;
    phone_num?:string;
    email?:string;
    payment_or_insurance?:string;
    allergies_or_chronic_issues?:string;
    current_treatments?:string;
    med_history?:string;
    doctors_comments?:string;
}

export interface PatientSingle {
    id?:number;
    first_name?:string;
    last_name?:string;
    sex?:string;
    phone_num?:string;
    email?:string;
    payment_or_insurance?:string;
    allergies_or_chronic_issues?:string;
    current_treatments?:string;
    med_history?:string;
    doctors_comments?:string;
}

export interface Doctor {
    id?: number;
    first_name?:string;
    last_name?:string;
    phone_num?:string;
    email?:string;
    position?:string;
    department?:string;
    specialty?:string;
    password?:string;
    numPages?:number;
}

export interface DoctorSingle {
    id?: number;
    first_name?:string;
    last_name?:string;
    phone_num?:string;
    email?:string;
    position?:string;
    department?:string;
    specialty?:string;
    password?:string;
}

export interface Room{
    id?:number;
    id_num?:string;
    ward?:string;
    floor?:string;
    availability_status?:string;
    time_reserved?:string;
}

export interface RoomSingle{
    id?:number;
    id_num?:string;
    ward?:string;
    floor?:string;
    availability_status?:string;
    time_reserved?:string;
    wing?:string;
}

export interface Admin{
    id:number;
    first_name:string;
    last_name:string;
    phone_num:string;
    email:string;
    position:string;
    department:string;
    passowrd:string;
}

export interface AdminSingle{
    id?:number;
    first_name?:string;
    last_name?:string;
    phone_num?:string;
    email?:string;
    position?:string;
    department?:string;
    password?:string;
}