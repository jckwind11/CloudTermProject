import { Provider } from './Provider';

export class User {
    username: string;
    token?: string;
    platform: Provider;
    firstName: string;
    lastName: string;
    favoritePlatform: string;
    // tslint:disable-next-line:variable-name
    _id: string;
}