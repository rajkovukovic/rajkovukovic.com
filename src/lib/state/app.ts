import { SettingsStorage } from "$lib/SettingsStorage";
import type { Page } from "@sveltejs/kit";
import { writable, type Writable } from "svelte/store";

export const errorStore: Writable<Page<Record<string, string>, string | null> | null> = writable(null);

export const languageStore: Writable<string | null> = writable(SettingsStorage.language);

export const themeStore: Writable<string | null> = writable(SettingsStorage.theme);
