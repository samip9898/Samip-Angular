export class Employee {


    name: string;
    email: string;
    address?: Address[]
    mobile: number;
    department: string;
    gender: string;
    hireDate: Date;
    permanent: boolean;
    id: number;
}

class Address {
    city: string
    street: string
    zipCode: number
    state: string
}