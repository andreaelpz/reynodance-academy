export interface User {
    // Student Information
    id: string;
    fullName: string;
    dateOfBirth: string;
    age: number;
    hasDanceExperience: boolean;
    experienceLength?: number; 
    previousSchool?: string; 
    specialCondition?: string; 
    status: string;
    username: string;
    password: string;

    // Parent Information
    mother: {
    name: string;
    address: string;
    email: string;
    phone: string;
    occupation?: string;
    };

    father: {
    name: string;
    address: string;
    email: string;
    phone: string;
    occupation?: string; 
    };
}