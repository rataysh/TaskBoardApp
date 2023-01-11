/** @format */

import {combineReducers} from "redux";
import {modalViewReducer} from "./modalViewReducer";
import {taskBoardDataReducer} from "./taskBoard/taskBoardDataReducer";
import {projectsReducer} from "./mainReducer/projectsReducer";
import {subTaskViewReducer} from "./subTaskViewReducer";
import {idTaskReducer} from "./getIdReducers/idTaskReducer";
import {idSubTaskReducer} from "./getIdReducers/idSubTaskReducer";
import {modalViewDelTaskReducer} from "./delTask/modalViewDelTask";
import {idForDelTaskReducer} from "./delTask/idForDelTask";
import {idProjectReducer} from "./getIdReducers/idProjectReducer";

import {persistReducer} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const rootResucer = combineReducers({
    projects: projectsReducer,
    modalView: modalViewReducer,
    taskBoardData: taskBoardDataReducer,
    subTaskView: subTaskViewReducer,
    idTask: idTaskReducer,
    idSubTask: idSubTaskReducer,
    modalViewDelTask: modalViewDelTaskReducer,
    idForDelTask: idForDelTaskReducer,
    idProject: idProjectReducer,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

export const persistedReducer = persistReducer(persistConfig, rootResucer);

export type RootState = ReturnType<typeof rootResucer>;
// export const store = createStore(rootResucer);
