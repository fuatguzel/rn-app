export const RECEIVE_SYMPTOMS = 'RECEIVE_SYMPTOMS';
export const ADD_SYMPTOM = 'ADD_SYMPTOM';

export function receiveEntries(entries) {
  return {
    type: RECEIVE_SYMPTOMS,
    entries,
  };
}

export function addEntry(entry) {
  return {
    type: ADD_SYMPTOM,
    entry,
  };
}
