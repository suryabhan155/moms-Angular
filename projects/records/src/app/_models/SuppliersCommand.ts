export interface SuppliersCommand{
    name: string;
    status: number;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}
