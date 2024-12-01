import { EmailValidator } from "@angular/forms";

export interface User {
    // Student Information
    fullName: string;
    dateOfBirth: string;
    age: number;
    hasDanceExperience: boolean;
    experienceLength?: number; // Optional
    previousSchool?: string; // Optional
    specialCondition?: string; // Optional

    // Parent Information
    mother: {
    name: string;
    address: string;
    email: string;
    phone: string;
    occupation?: string; // Optional
    };

    father: {
    name: string;
    address: string;
    email: string;
    phone: string;
    occupation?: string; // Optional
    };
}
