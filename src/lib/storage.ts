import type { AppState } from "../types";
import { DEFAULT_STATE } from "../types";

const STORAGE_KEY = "menstyles-state";

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) } as AppState;
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(state: AppState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
