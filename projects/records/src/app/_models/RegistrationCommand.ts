export interface RegistrationCommand {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    doB: Date;
    sex: string;
    maritalStatus: string;
    narrative?: string;
    searchVector?: string[];
    userId: string;
    void: false;
    createDate: Date;
    voidDate?: Date;
    guardians: Guardian[];
    death?: Death;
    contacts: Contacts[];
    employers: Employers[];
    registrationDate: Date;
    identificationNumber: string;
    phone?: string;
    patientNumber?: string;
}

export interface Guardian {
    patientId: string;
    relationship: string;
    createDate: Date;
    void: false;
    voidDate?: Date;
    userId: string;
}

export interface Death {
    dateDeceased?: Date;
    reasonDeceased: string;
    icD10: string;
    patientId: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
    id?: string;
}

export interface Contacts {
    address?: string;
    city?: string;
    postalCode?: string;
    county: string;
    subCounty: string;
    ward: string;
    homePhone?: string;
    mobilePhone?: string;
    email?: string;
    patientId: string;
    createDate: Date;
    void: false;
    voidDate?: Date;
    userId: string;
    id?: string;
}

export interface Employers {
    occupation?: string;
    employers?: string;
    employerAddress?: string;
    city?: string;
    country?: string;
    industry?: string;
    patientId: string;
    createDate: Date;
    void: false;
    voidDate?: Date;
    userId: string;
    id?: string;
}
