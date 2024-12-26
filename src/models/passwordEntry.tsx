import {Tags} from "./tag";

export interface PasswordEntry {
    id: string,
    appName: string,
    logo: string,
    url: string,
    passwordHash: string,
    username: string,
    tags: Tags
}