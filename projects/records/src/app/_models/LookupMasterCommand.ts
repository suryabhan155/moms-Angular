export interface LookupMasterCommand {
    name: string;
    alias: string;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}