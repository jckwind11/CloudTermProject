import { Provider } from './Provider';

export class User {
    username: string;
    token?: string;
    platform: Provider;
}