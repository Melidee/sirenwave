import { writable } from 'svelte/store';
import { liveConfigState } from './types'

export const songQueue = writable(0)

export const liveConfig = writable(new liveConfigState())