import { writable, type Writable } from 'svelte/store';
export let OpenApps: Writable<Array<ApplicationType>> = writable([]);
export let FocussedApp: Writable<ApplicationType> = writable();

export interface ApplicationType {
    icon?: string;
    slot?: Function;
    id: string;
    title: string;
}