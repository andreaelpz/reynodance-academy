export interface User {
    // Student Information
    fullName: string;
    dateOfBirth: string; // Store as a string in ISO format (e.g., 'YYYY-MM-DD')
    age: number;
    hasDanceExperience: boolean; // Represent the Yes/No radio button
    experienceLength?: number; // Optional since they may not have prior experience
    previousSchool?: string; // Optional
    specialCondition?: string; // Optional

    // Parent Information
    mother: {
    name: string;
    address: string;
    phone: string;
    occupation?: string; // Optional
    };
    
    father: {
    name: string;
    address: string;
    phone: string;
    occupation?: string; // Optional
    };
}
