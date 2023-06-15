import { writable, type Writable } from 'svelte/store';
import {v4 as uuid} from "uuid"
import ExampleApp from './applications/Example.svelte'

export interface Application {
    element: Function;
    id: string;
}
export let openApps: Writable<Array<Application>> = writable([{element: ExampleApp, id: uuid()}])

