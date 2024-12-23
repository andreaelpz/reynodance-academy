export interface User {
    // Student Information
    fullName: string;
    dateOfBirth: Date | null; // Store as a string in ISO format (e.g., 'YYYY-MM-DD')
    age: number;
    hasDanceExperience: boolean;
    experienceLength?: number; // Optional
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
