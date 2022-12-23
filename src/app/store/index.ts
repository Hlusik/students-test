import { ActionReducerMap } from "@ngrx/store";

import { StudentsEffects } from "./students/students.effects";
import { studentsFeatureKey, studentsReducer } from "./students/students.reducer";

export interface State {
}

export const reducers: ActionReducerMap<State> = {
    [studentsFeatureKey]: studentsReducer,
};

export const effects = [StudentsEffects];