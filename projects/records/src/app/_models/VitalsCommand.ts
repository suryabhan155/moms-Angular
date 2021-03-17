export interface VitalsCommand {
    patientId: string;
    vitalDateTime: Date;
    temperature: number;
    weight: number;
    height: number;
    bpDiastolic: number;
    bpSystolic: number;
    pulse: number;
    respiratoryRate: number;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
    notes?: string;
}
