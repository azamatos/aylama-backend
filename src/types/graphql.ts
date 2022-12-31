
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class AddAdvertisementInput {
    h1: string;
    description?: Nullable<string>;
    fromCityId: string;
    toCityId: string;
    startDate: string;
    endDate: string;
    price: number;
}

export class UpdateAdvertisementInput {
    id: string;
    h1?: Nullable<string>;
    description?: Nullable<string>;
    fromCityId?: Nullable<string>;
    toCityId?: Nullable<string>;
    price?: Nullable<number>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    statusId?: Nullable<string>;
    isDeleted?: Nullable<boolean>;
}

export class AddCityInput {
    name: string;
    countryId: string;
}

export class CityWithAdvertisementsInput {
    id: string;
    from: boolean;
    to: boolean;
}

export class AddCountryInput {
    name: string;
}

export class AddStatusInput {
    name: string;
}

export class UserInput {
    name?: Nullable<string>;
    phone_number: string;
}

export class LoginInput {
    phone_number: string;
}

export class Advertisement {
    id: string;
    h1: string;
    description?: Nullable<string>;
    from: City;
    to: City;
    price: number;
    status: Status;
    isDeleted: boolean;
    startDate: string;
    endDate: string;
    created_at: string;
    updated_at: string;
}

export class City {
    id: string;
    name: string;
    country: Country;
    created_at: string;
    updated_at: string;
}

export class Country {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    cities?: Nullable<Nullable<City>[]>;
}

export class Status {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export abstract class IQuery {
    abstract getUserAdvertisements(token: string): Nullable<Nullable<Advertisement>[]> | Promise<Nullable<Nullable<Advertisement>[]>>;

    abstract getAdvertisement(id: string): Nullable<Advertisement> | Promise<Nullable<Advertisement>>;

    abstract getCities(token: string): Nullable<Nullable<City>[]> | Promise<Nullable<Nullable<City>[]>>;

    abstract getCitiesWithAdvertisements(cityWithAdvertisements?: Nullable<CityWithAdvertisementsInput>): Nullable<Nullable<CityWithAdvertisements>[]> | Promise<Nullable<Nullable<CityWithAdvertisements>[]>>;

    abstract getCountries(token: string): Nullable<Nullable<Country>[]> | Promise<Nullable<Nullable<Country>[]>>;

    abstract getStatuses(): Nullable<Nullable<Status>[]> | Promise<Nullable<Nullable<Status>[]>>;

    abstract getStatusWithAdvertisements(id: number): Nullable<StatusWithAdvertisements> | Promise<Nullable<StatusWithAdvertisements>>;

    abstract login(loginInput: LoginInput): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;
}

export abstract class IMutation {
    abstract addAdvertisement(advertisementInput?: Nullable<AddAdvertisementInput>): Nullable<Advertisement> | Promise<Nullable<Advertisement>>;

    abstract updateAdvertisement(advertisementInput?: Nullable<UpdateAdvertisementInput>): Nullable<Advertisement> | Promise<Nullable<Advertisement>>;

    abstract addCity(addCityInput?: Nullable<AddCityInput>): Nullable<City> | Promise<Nullable<City>>;

    abstract addCountry(addCountryInput?: Nullable<AddCountryInput>): Nullable<Country> | Promise<Nullable<Country>>;

    abstract addStatus(addStatusInput?: Nullable<AddStatusInput>): Nullable<Status> | Promise<Nullable<Status>>;

    abstract register(registerInput: UserInput): Nullable<User> | Promise<Nullable<User>>;
}

export class CityWithAdvertisements {
    id: string;
    name: string;
    country: Country;
    advertisementsFrom?: Nullable<Nullable<Advertisement>[]>;
    advertisementsTo?: Nullable<Nullable<Advertisement>[]>;
    created_at: string;
    updated_at: string;
}

export class StatusWithAdvertisements {
    id: string;
    name: string;
    advertisements?: Nullable<Nullable<Advertisement>[]>;
    created_at: string;
    updated_at: string;
}

export class User {
    id: string;
    name?: Nullable<string>;
    phone_number: string;
    created_at: string;
    updated_at: string;
}

export class LoginResponse {
    token: string;
}

type Nullable<T> = T | null;
