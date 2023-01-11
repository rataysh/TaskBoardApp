/** @format */

enum ActionString {
    PROJECT_GET_ID = "PROJECT_GET_ID",
    PROJECT_RESET_ID = "PROJECT_RESET_ID",
}

interface ActionSubTaskGetId {
    type: ActionString.PROJECT_GET_ID;
    payload: number;
}

interface ActionSubTaskResetId {
    type: ActionString.PROJECT_RESET_ID;
}

type ActionEachTask = ActionSubTaskGetId | ActionSubTaskResetId;

const initialState: number | null = null;

export const idProjectReducer = (
    state = initialState,
    action: ActionEachTask
): number | null => {
    switch (action.type) {
        case ActionString.PROJECT_GET_ID:
            return action.payload;
        case ActionString.PROJECT_RESET_ID:
            return (state = null);
        default:
            return state;
    }
};
