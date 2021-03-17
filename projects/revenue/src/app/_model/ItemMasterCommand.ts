export interface ItemMasterCommand{
id: string;
name: string;
displayname: string;
itemTypeId: string;
itemSubTypeId: string;
itemcode: string;
itemdescription: string;
abbreviation: string;
type: string;
createDate: Date;
void: boolean;
voidDate?: Date;
userId: string;
}