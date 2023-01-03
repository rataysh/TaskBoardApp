/** @format */

import {IProject} from "../src/interface/IProject";
import {IComment, ITask} from "../src/interface/ITask";

// CREATE NEW ID FUNCTION
export const idAdd = (obj: Array<IProject | ITask | IComment>) => {
    const allId = obj.map((elem) => elem.id);
    return obj.length === 0 ? 0 : Math.max(...allId) + 1;
};
