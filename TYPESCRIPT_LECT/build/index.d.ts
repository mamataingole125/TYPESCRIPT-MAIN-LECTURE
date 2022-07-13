declare let x: boolean;
declare let isDone: boolean;
declare let y: number;
declare let price: number;
declare let z: bigint;
declare let firstname: string;
declare let first_name: string;
declare let last_name: string;
declare let full_name: string;
declare let list: number[];
declare let stringList: string[];
declare let arrayOfStrings: string[];
declare let boolList: Array<number>;
declare let tuple: [string, number];
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare const enum Color1 {
    Red = 1,
    Green = 3,
    Blue = 5
}
declare const enum Color2 {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
declare let u: undefined;
declare let n: null;
declare let a: any;
declare function sum(a: number, b: number): number;
declare function sum1(a: number, b: number): void;
declare let addfn: (x: number, y: number) => number;
declare let addFn: (x: number, y: number) => number;
declare let value: any;
interface ButtonProps {
    label: string;
    color?: string;
    size?: number;
}
declare let obj: ButtonProps;
declare type softwareDeveloper = {
    skills: string;
};
declare type person1 = {
    first_name: string;
    last_name: string;
    age?: number;
    isWorking: boolean;
};
declare let arrOfPerson: person[];
declare const masai: person1;
interface person {
    firstname: string;
    lastname: string;
}
declare function printName({ firstname, lastname }: person): string;
declare function printName1({ firstname, lastname }: person): string;
declare let mix: number | string | boolean | null;
declare let userType: "super-admin" | "admin" | "user";
declare type RequestLoading = {
    state: "Loading";
};
declare type RequestFailure = {
    state: "failed";
    code: number;
};
declare type RequestSuccess = {
    state: "success";
    response: {
        title: string;
        status: boolean;
        id: string;
        count: number;
    };
};
declare type NetworkState = RequestFailure | RequestLoading | RequestSuccess;
interface ErrorInterface {
    status: boolean;
    error?: {
        message: string;
    };
}
interface CityData {
    cityName: {
        title: string;
    };
}
interface CountryData {
    datails: {
        countOfCities: number;
        capital: string;
    };
}
declare type CityResponce = ErrorInterface & CityData;
declare type CountryResponse = ErrorInterface & CountryData;
declare let response: CityResponce;
declare let coder: person1 & softwareDeveloper;
