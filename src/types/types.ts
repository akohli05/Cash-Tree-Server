import { Document } from "mongoose"

export interface AccountType extends Document{
	accountTypes: [''];
}

export interface Customer extends Document{
	firstName: string;
	middleInitial?: string;
	lastName: string;
	suffix?: string;
	birthDate: string;
	socialSecurity: string;
	maidenNameOfMother: string;
	occupation: string;
	citizenship: string;
	email: string;
	personalPhone: string;
	workPhone?: string;
	phoneExtension: string;
	address: string;
	addressAdditional?: string;
	city: string;
	state: string;
	zipcode: string;
	isHomeandMailingSame: string,
	addressMailing: string;
	addressAdditionalMailing?: string;
	cityMailing: string;
	stateMailing: string;
	zipcodeMailing: string;
	accountTypes: any;
}

