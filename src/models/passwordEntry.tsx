import {Tags} from "./tag";

export interface PaswordEntry {
    appName: string,
    logo: string,
    url: string,
    passwordHash: string,
    username: string,
    tags: Tags
}